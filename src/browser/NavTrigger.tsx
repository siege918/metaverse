import React from "react";
import CommonProps from "../CommonProps";
import { TabId } from "./Browser";

export type NavTriggerProps = {
    tabId: TabId;
    pageId: string;
} & CommonProps;

export class NavTrigger extends React.Component<NavTriggerProps> {

    render() {
        const { navigateBrowser, tabId, pageId, children } = this.props;

        const onClick = () => {
            navigateBrowser(tabId, pageId);
        }

        return <a className={`NavLink`} href={`#/${tabId}/${pageId}`} onClick={ onClick } draggable="false">{children}</a>;
    }
}