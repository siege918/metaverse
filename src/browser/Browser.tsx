import React from "react";
import CommonProps from "../CommonProps";
import { Flags } from "../Flags";
import { Window } from '../Window';

export enum TabId {
    Games,
    Movies,
    Tracker
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

    private tabs: Tab[] = [
        { id: TabId.Games, text: "Big Boom Games", favicon: 'big-boom-favicon.png' },
        { id: TabId.Movies, text: "MovieEinstein", isVisible: () => !!this.props.FlagMap[Flags.HasUnlockedMovieEinstein] },
        { id: TabId.Tracker, text: "Metaverse Tracker", isVisible: () => !!this.props.FlagMap[Flags.HasUnlockedMetaverseTracker] }
    ]

    componentDidUpdate() {
        console.log('updating');
    }

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
            <Window title="FlameWolf" className="Browser">
                <div className="TabsContainer">
                    {this.getTabs()}
                </div>
                <div className="ContentContainer">
                    <a href='#/' onClick={() => { this.props.triggerChatEvent("TestEvent") }}>Trigger the test event</a>
                </div>
            </Window>
        );
    }
}