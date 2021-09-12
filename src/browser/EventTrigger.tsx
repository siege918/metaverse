import React from "react";
import CommonProps from "../CommonProps";
import { EventFlagMap } from "../events";

export type EventTriggerProps = {
    eventName: string;
} & CommonProps;

export class EventTrigger extends React.Component<EventTriggerProps> {
    render() {
        const { triggerChatEvent, eventName, children } = this.props;

        const flag = EventFlagMap[eventName]?.visibleFlag;

        const isActive = !flag || this.props.FlagMap[flag];

        const onClick = () => {
            if (isActive) {
                triggerChatEvent(eventName)
            }
        }

        return <a className={`EventLink ${isActive ? 'Active' : 'Inactive'}`} href='#/' onClick={ onClick } draggable="false">{children}</a>;
    }
}