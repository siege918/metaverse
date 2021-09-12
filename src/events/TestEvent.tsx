import { UserKey } from "../chat/Users";
import { Flags } from "../Flags";
import { ChatEventType, ChatEvent, ChatEventItem } from "./ChatEvent";

const testEventItems: ChatEventItem[] = [
    {
        type: ChatEventType.User,
        typingTime: 2500,
        Text: "Hey can you hear me?",
        UserKey: UserKey.jonii
    },
    {
        type: ChatEventType.User,
        typingTime: 1000,
        Text: "No.",
        UserKey: UserKey.chuck
    },
    {
        type: ChatEventType.User,
        typingTime: 2500,
        Text: "There's not any voice chat in this program",
        UserKey: UserKey.chuck
    }
];

const testEvent: ChatEvent = {
    items: testEventItems,
    activeFlag: Flags.HasUnlockedMetaverseTracker,
    triggeredFlag: Flags.HasClickedTestEvent
}

export default testEvent;