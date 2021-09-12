import { ChatEvent } from './ChatEvent';
import TestEvent from './TestEvent';
import UnlockMetaverse from './UnlockMetaverse';

interface IEventMap {
    [key: string]: ChatEvent;
}

export const EventMap: IEventMap = {
    TestEvent,
    UnlockMetaverse
};