import React from "react";
import CommonProps from "../CommonProps";

export type EventTriggerProps = {
    eventName: string;
} & CommonProps;

export class EventTrigger extends React.Component<EventTriggerProps> {
    render() {
        const { triggerChatEvent, eventName, children } = this.props;
        return <a className="EventLink" href='#/' onClick={() => { triggerChatEvent(eventName) }}>{children}</a>;
    }
}