import React from 'react';
import { FlagManager } from '../../FlagManager';

import User from "../User";
import Message, { MessageType } from "./Message";

export default class UserMessage extends Message {
    type = MessageType.USER;

    render() {
        return (<></>);
    }
}