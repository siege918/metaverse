import React from "react";
import CommonProps from "../CommonProps";
import { EventMap } from "../events";

export type EventTriggerProps = {
    eventName: string;
} & CommonProps;

interface EventTriggerState {
    wasClicked: boolean;
}

export class EventTrigger extends React.Component<EventTriggerProps, EventTriggerState> {

    constructor(props: EventTriggerProps) {
        super(props);
        const { FlagMap, eventName } = props;
        const { triggeredFlag } = EventMap[eventName];

        console.log(triggeredFlag);
        if (triggeredFlag) {
            console.log(FlagMap[triggeredFlag]);
        }
        console.log(!triggeredFlag || !FlagMap[triggeredFlag])

        this.state = {
            wasClicked: !!triggeredFlag && !!FlagMap[triggeredFlag]
        }
    }

    render() {
        const { triggerChatEvent, eventName, children } = this.props;

        let isActive = true;

        const event = EventMap[eventName];

        if (event) {
            const { activeFlag } = event;

            isActive = (!activeFlag || this.props.FlagMap[activeFlag]) && !this.state.wasClicked;
        }

        const onClick = () => {
            if (isActive) {
                triggerChatEvent(eventName)
                this.setState({
                    wasClicked: true
                })
            }
        }

        return <a className={`EventLink ${isActive ? 'Active' : 'Inactive'}`} href='#/' onClick={ onClick } draggable="false">{children}</a>;
    }
}