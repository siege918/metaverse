import React from "react";
import CommonProps from "../CommonProps";
import { Flags } from "../Flags";
import { get } from "../helpers";
import { Window } from '../Window';
import { GameBrowserContent } from "./GameBrowserContent";

export enum TabId {
    Games = "GAMES",
    Movies = "MOVIES",
    Tracker = "TRACKER"
}

interface BrowserState {
    selectedTab: TabId;
}

export type BrowserProps = CommonProps;

interface Tab {
    id: TabId;
    text: string;
    isVisible?: () => boolean;
    favicon?: string;
}

export class Browser extends React.Component<BrowserProps, BrowserState> {
    constructor(props: BrowserProps) {
        super(props);
        this.state = {
            selectedTab: TabId.Games
        }
        this.props.setBrowserListener(this.navigate)
    }

    private getUIText = (id: string) => get(this.props.LocaleStrings, `Browser.UI.${id}`, '');

    private tabs: Tab[] = [
        { id: TabId.Games, text: this.getUIText('Tabs.Games'), favicon: 'big-boom-favicon.png' },
        { id: TabId.Movies, text: this.getUIText('Tabs.Movies'), isVisible: () => !!this.props.FlagMap[Flags.HasUnlockedMovieEinstein] },
        { id: TabId.Tracker, text: this.getUIText('Tabs.Tracker'), isVisible: () => !!this.props.FlagMap[Flags.HasUnlockedMetaverseTracker] }
    ]

    getTabs = () => {
        const { selectedTab } = this.state;

        return this.tabs
            .filter(tab => tab.isVisible ? tab.isVisible() : true)
            .map(tab => (
            <div key={tab.id} onClick={this.getTabOnClick(tab.id)} className={`Tab ${tab.id === selectedTab ? 'Active' : ''}`}>
                <div className="Favicon">
                    <img alt={`Favicon for ${tab.text}`} src={tab.favicon ?? 'default-favicon.png'}/>
                </div>
                <div className="TabText">
                    {tab.text}
                </div>
            </div>
        ));
    }

    getTabOnClick = (tabId: TabId) => {
        return () => {
            this.setState({
                selectedTab: tabId
            })
        };
    }

    navigate = (tabId: TabId, pageId: string) => {
        this.setState({
            selectedTab: tabId
        })
    }

    render() {
        return (
            <Window title={this.getUIText('Header')} className="Browser">
                <div className="TabsContainer">
                    {this.getTabs()}
                </div>
                <div className="ContentContainer">
                    <GameBrowserContent {...this.props} {...this.state} />
                </div>
            </Window>
        );
    }
}