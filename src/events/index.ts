import { ChatEvent } from './ChatEvent';
import TestEvent from './TestEvent';

interface IEventMap {
    [key: string]: ChatEvent;
}

const EventMap: IEventMap = {
    TestEvent 
};

export default EventMap;