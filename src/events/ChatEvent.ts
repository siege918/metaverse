import { UserKey } from "../chat/Users";
import { Flags } from "../Flags";

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
    Text?: string;
    TextId?: string;
}

export type ChatEventItem = UserMessageEventItem;

export interface ChatEvent {
    items: ChatEventItem[];
    activeFlag?: Flags;
    triggeredFlag?: Flags;

}