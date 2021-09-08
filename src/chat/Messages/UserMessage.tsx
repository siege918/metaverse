import React from 'react';
import { FlagManager } from '../../FlagManager';

import User from "../User";
import Message, { MessageType } from "./Message";

export default class UserMessage extends Message {
    type =  MessageType.USER;
    
    user: User;
    timestamp: Date;
    text: string;

    constructor(user: User, timestamp: Date, text: string) {
        super();
        this.user = user;
        this.timestamp = timestamp;
        this.text = text;
    }

    render(FlagManager: FlagManager) {
        return (<></>);
    }
}