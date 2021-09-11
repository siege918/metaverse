import React from "react";
import CommonProps from "../CommonProps";
import { TabId } from "./Browser";

export type BrowserContentProps = {
    selectedTab: TabId;
} & CommonProps;

interface BrowserContentState {

}

export abstract class BrowserContent extends React.Component<BrowserContentProps, BrowserContentState> {
    protected TAB_ID: TabId = TabId.Games;

    protected abstract renderSite(): React.ReactNode;

    render() {
        if (this.props.selectedTab !== this.TAB_ID) return '';

        return this.renderSite();
    }
}