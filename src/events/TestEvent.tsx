import { UserKey } from "../chat/Users";
import { ChatEventType, ChatEvent } from "./ChatEvent";

const testEvent: ChatEvent = [
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

export default testEvent;