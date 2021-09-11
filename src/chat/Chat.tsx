import React from 'react';
import { Window } from '../Window';
import DebugMessage from './Messages/DebugMessage';
import CommonProps from '../CommonProps';
import { ReactElement } from 'react';
import UserMessage from './Messages/UserMessage';
import { UserKey } from './Users';
import { LoremIpsum } from 'lorem-ipsum';
import EventMap from '../events';
import { timeout } from '../helpers';

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

    constructor(props: ChatProps) {
        super(props);
        this.state = {
            userName: 'Me',
            messages: [
                <DebugMessage {...this.props} />,
                <UserMessage {...this.props} User={UserKey.jonii} Text="This is a test message" />,
                ...generateTestMessages(this.props),
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
            <Window title="MSM Messenger" className="Chat">
                <div className="Header">
                    <div className="AvatarContainer">
                        <img alt={`${userName}'s Avatar`} className="Avatar" src="/default.png" draggable="false" />
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
                    <textarea name="entry" className="Entry" placeholder="Type your chat message here..." disabled={this.state.disableChat} />
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
        console.log("Event pushed");
        this.EventQueue.push(eventKey);
        if (!this.state.eventProcessorRunning) {
            console.log("Event processor started");
            this.startEventProcessor();
        }
    }

    startEventProcessor = async () => {
        this.setState({
            eventProcessorRunning: true
        });
        while (this.EventQueue.length) {
            const event = this.EventQueue.shift();
            console.log(`Processing event "${event}"`);
            if (event) {
                await this.processEvent(event);
            }
        }
        console.log("Event queue is empty");
        this.setState({
            eventProcessorRunning: false
        })
    }

    processEvent = async (eventId: string) => {
        const event = EventMap[eventId];

        if (event) {
            for (const eventItem of event) {
                await timeout(eventItem.typingTime);
                this.setState({
                    messages: [
                        ...this.state.messages,
                        <UserMessage User={eventItem.UserKey} Text={eventItem.Text} {...this.props} />
                    ]
                })
            }
        }
    }
}