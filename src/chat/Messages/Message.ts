import React from "react";
import CommonProps from "../../CommonProps";

export enum MessageType {
    USER,
    SYSTEM,
    PLAYER,
    DEBUG
}

export default abstract class Message<T> extends React.Component<CommonProps & T> {
    abstract type: MessageType;
}