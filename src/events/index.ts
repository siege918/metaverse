import { ChatEvent } from './ChatEvent';
import TestEvent from './TestEvent';

interface IEventMap {
    [key: string]: ChatEvent;
}

export const EventMap: IEventMap = {
    TestEvent
};