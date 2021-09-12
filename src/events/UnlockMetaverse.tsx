import { UserKey } from "../chat/Users";
import { Flags } from "../Flags";
import { ChatEventType, ChatEvent, ChatEventItem } from "./ChatEvent";

const testEventItems: ChatEventItem[] = [
    {
        type: ChatEventType.User,
        typingTime: 0,
        TextId: "Jonii.Start",
        UserKey: UserKey.jonii
    },
    {
        type: ChatEventType.User,
        typingTime: 1000,
        TextId: "Chuck.Response",
        UserKey: UserKey.chuck
    },
    {
        type: ChatEventType.User,
        typingTime: 2500,
        TextId: "Jonii.End",
        UserKey: UserKey.jonii
    }
];

const testEvent: ChatEvent = {
    items: testEventItems,
    triggeredFlag: Flags.HasUnlockedMetaverseTracker
}

export default testEvent;