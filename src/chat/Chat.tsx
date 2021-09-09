import React from 'react';
import { Window } from '../Window';
import DebugMessage from './Messages/DebugMessage';
import CommonProps from '../CommonProps';
import { ReactElement } from 'react';
import UserMessage from './Messages/UserMessage';
import { UserKey } from './Users';
import { LoremIpsum } from 'lorem-ipsum';

interface ChatState {
    messages: ReactElement[];
    userName: string;
    avatar?: string;
    disableChat: boolean;
}

export type ChatProps = {
    initialMessages?: ReactElement[];
} & CommonProps;

const generateTestMessages = (props: CommonProps) => {
    const lorem = new LoremIpsum();
    const messageCount = 75;

    const messages = [];

    for (var i = 0; i < messageCount; i++) {
        const user = i % 2 == 0 ? UserKey.chuck : UserKey.jonii
        messages.push(<UserMessage {...props} Text={lorem.generateSentences(2)} User={user} />)
    }

    return messages;
}

export class Chat extends React.Component<ChatProps, ChatState> {
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
            disableChat: true
        };
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
            <Window title="CBT Messenger" className="Chat">
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
}