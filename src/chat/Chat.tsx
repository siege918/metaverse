import React from 'react';
import Message from './Messages/Message';
import { USERS, default as Users } from './Users';
import { Window } from '../Window'
import { FlagManager } from '../FlagManager';
import UserMessage from './Messages/UserMessage';

interface ChatState {
    messages: Message[];
    userName: string;
    avatar?: string;
    disableChat: boolean;
}

export interface ChatProps {
    initialMessages?: Message[];
    FlagManager: FlagManager;
}

export class Chat extends React.Component<ChatProps, ChatState> {
    constructor(props: ChatProps) {
        super(props);
        this.state = {
            userName: 'Me',
            messages: [
                new UserMessage(
                    Users[USERS.jonii],
                    new Date(),
                    "Hello world!"
                ),
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
                    {messages.map(message => message.render())}
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