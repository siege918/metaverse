import { ReactNode } from "react";
import { UserKey } from "../chat/Users";

export enum ChatEventType {
    User
}

export interface CommonChatEventItem {
    type: ChatEventType;
    typingTime: number;
}

export interface UserMessageEventItem extends CommonChatEventItem {
    type: ChatEventType.User;
    UserKey: UserKey;
    Text: string;
}

export type ChatEventItem = UserMessageEventItem;

export type ChatEvent = ChatEventItem[];