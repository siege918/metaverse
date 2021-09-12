import React from "react";
import CommonProps from "../CommonProps";
import { EventMap } from "../events";

export type EventTriggerProps = {
    eventName: string;
} & CommonProps;

export class EventTrigger extends React.Component<EventTriggerProps> {
    render() {
        const { triggerChatEvent, eventName, children } = this.props;

        let isActive = true;

        const event = EventMap[eventName];

        if (event) {
            const { activeFlag, triggeredFlag } = event;

            isActive = (!activeFlag || this.props.FlagMap[activeFlag]) && (!triggeredFlag || !this.props.FlagMap[triggeredFlag]);
        }

        const onClick = () => {
            if (isActive) {
                triggerChatEvent(eventName)
            }
        }

        return <a className={`EventLink ${isActive ? 'Active' : 'Inactive'}`} href='#/' onClick={ onClick } draggable="false">{children}</a>;
    }
}