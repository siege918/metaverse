import React from 'react';
import { UserKey, default as Users } from '../Users';

import Message, { MessageType } from "./Message";

export interface UserMessageProps {
    User: UserKey;
    Text: string;
}

export default class UserMessage extends Message<UserMessageProps> {
    type = MessageType.USER;

    render() {
        const User = Users[this.props.User];

        return (
            <div className="UserMessage">
                <span className="UserName" style={{ color: User.color }}>{User.name}</span>&nbsp;
                <span className="Text">{this.props.Text}</span>
            </div>
        );
    }
}