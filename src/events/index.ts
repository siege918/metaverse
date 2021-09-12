import { Flags } from '../Flags';
import { ChatEvent } from './ChatEvent';
import TestEvent from './TestEvent';

interface IEventMap {
    [key: string]: ChatEvent;
}

interface EventFlags {
    visibleFlag?: Flags;
    triggeredFlag?: Flags;
}

interface IEventFlagMap {
    [key: string]: EventFlags
}

export const EventMap: IEventMap = {
    TestEvent
};

export const EventFlagMap: IEventFlagMap = {
    "TestEvent": {
        visibleFlag: Flags.HasUnlockedMetaverseTracker
    }
};