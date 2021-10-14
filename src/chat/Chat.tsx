import React from 'react';
import { Window } from '../Window';
import CommonProps from '../CommonProps';
import { ReactElement } from 'react';
import UserMessage from './Messages/UserMessage';
import { UserKey } from './Users';
import { LoremIpsum } from 'lorem-ipsum';
import { EventMap } from '../events';
import { get, getAssetLink, parseText, timeout } from '../helpers';

interface ChatState {
    messages: ReactElement[];
    userName: string;
    avatar?: string;
    disableChat: boolean;
    eventProcessorRunning: boolean;
}

export type ChatProps = {
    initialMessages?: ReactElement[];
} & CommonProps;

// eslint-disable-next-line
const generateTestMessages = (props: CommonProps) => {
    const lorem = new LoremIpsum();
    const messageCount = 75;

    const messages = [];

    for (var i = 0; i < messageCount; i++) {
        const user = i % 2 === 0 ? UserKey.chuck : UserKey.jonii
        messages.push(<UserMessage {...props} Text={lorem.generateSentences(2)} User={user} />)
    }

    return messages;
}

export class Chat extends React.Component<ChatProps, ChatState> {
    private EventQueue: string[] = [];

    private getUIText = (id: string) => get(this.props.LocaleStrings, `Chat.UI.${id}`, '');
    private getEventText = (eventId: string, textId: string) => get(this.props.LocaleStrings, `Chat.Events.${eventId}.${textId}`, '');

    constructor(props: ChatProps) {
        super(props);
        this.state = {
            userName: 'Me',
            messages: [
                ...(props.initialMessages ?? [])
            ],
            disableChat: true,
            eventProcessorRunning: false
        };

        this.props.setChatEventListener(this.chatEventListener);
    }

    componentDidUpdate(oldProps: ChatProps, oldState: ChatState) {
        if (this.state.messages.length > oldState.messages.length) {
            const chatDiv = document.getElementsByClassName('Messages');

            for (const el of chatDiv) {
                el.scrollTop = el.scrollHeight;
            }
        }
    }

    render() {
        const { userName, messages } = this.state;
        return (
            <Window title={this.getUIText('Header')} className="Chat">
                <div className="Header">
                    <div className="AvatarContainer">
                        <img alt={`${userName}'s Avatar`} className="Avatar" src={getAssetLink('default.png')} draggable="false" />
                    </div>
                    <div className="UsernameContainer">
                        <input autoComplete="off" value={userName} onChange={this.onUserNameChange} />
                    </div>
                    <div className="OnlineStatus">
                        Online
                    </div>
                </div>
                <div className="Messages">
                    {messages}
                </div>
                <div className="EntryContainer">
                    <textarea name="entry" className="Entry" placeholder={this.getUIText('Placeholder')} disabled={this.state.disableChat} />
                </div>
            </Window>
        );
    }

    onUserNameChange: React.ChangeEventHandler<HTMLInputElement> = (ev: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            userName: ev.target.value
        });
    };

    chatEventListener = (eventKey: string) => {
        this.EventQueue.push(eventKey);
        if (!this.state.eventProcessorRunning) {
            this.startEventProcessor();
        }
    }

    startEventProcessor = async () => {
        this.setState({
            eventProcessorRunning: true
        });
        while (this.EventQueue.length) {
            const event = this.EventQueue.shift();
            if (event) {
                await this.processEvent(event);
            }
        }
        
        this.setState({
            eventProcessorRunning: false
        })
    }

    processEvent = async (eventId: string) => {
        const event = EventMap[eventId];

        if (event.triggeredFlag) {
            this.props.setFlag(event.triggeredFlag, true);
        }

        if (event) {
            let count = 0;
            for (const eventItem of event.items) {
                await timeout(eventItem.typingTime);
                let text = eventItem.Text;

                if (eventItem.TextId) {
                    text = this.getEventText(eventId, eventItem.TextId);
                }

                if (!text) {
                    console.warn(`Event ${eventId} has an invalid item.`);
                    continue;
                }

                const itemList = parseText(text, this.props);

                this.setState({
                    messages: [
                        ...this.state.messages,
                        <UserMessage User={eventItem.UserKey} Text={itemList} {...this.props} key={`${eventId}:${count}`} />
                    ]
                })
                count++;
            }
        }
    }
}