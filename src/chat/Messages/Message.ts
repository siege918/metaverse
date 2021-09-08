import { BrowserManager } from "../../BrowserManager";
import { FlagManager } from "../../FlagManager";

export enum MessageType {
    USER,
    SYSTEM
}

export default abstract class Message {
    abstract type: MessageType;

    abstract render(FlagManager: FlagManager, BrowserManager: BrowserManager): JSX.Element;
}