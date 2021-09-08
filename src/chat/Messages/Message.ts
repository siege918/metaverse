import React from "react";
import { BrowserManager } from "../../BrowserManager";
import CommonProps from "../../CommonProps";
import { FlagManager } from "../../FlagManager";

export enum MessageType {
    USER,
    SYSTEM,
    DEBUG
}

export default abstract class Message extends React.Component<CommonProps> {
    abstract type: MessageType;
}