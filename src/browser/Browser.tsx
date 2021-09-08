import React from "react";
import { FlagManager, Flag } from "../FlagManager";
import { Window } from '../Window';

interface BrowserState {
    selectedTab: string;
}

export interface BrowserProps {
    FlagManager: FlagManager
}

interface Tab {
    id: string;
    text: string;
    isVisible?: () => boolean;
    favicon?: string;
}

export class Browser extends React.Component<BrowserProps, BrowserState> {
    constructor(props: BrowserProps) {
        super(props);
        this.state = {
            selectedTab: 'Tab1'
        }
    }

    private tabs: Tab[] = [
        { id: "Tab1", text: "Big Boom Games", favicon: 'big-boom-favicon.png' },
        { id: "Tab2", text: "MovieEinstein", isVisible: () => this.props.FlagManager.getFlag(Flag.HasUnlockedMovieEinstein) },
        { id: "Tab3", text: "Metaverse Tracker", isVisible: () => this.props.FlagManager.getFlag(Flag.HasUnlockedMetaverseTracker) }
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

    getTabOnClick = (tabId: string) => {
        return () => {
            this.setState({
                selectedTab: tabId
            })
        };
    }

    render() {
        return (
            <Window title="FlameWolf" className="Browser">
                <div className="TabsContainer">
                    {this.getTabs()}
                </div>
                <div className="ContentContainer">

                </div>
            </Window>
        );
    }
}