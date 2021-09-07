import React from "react";
import { Window } from '../Window';

interface BrowserState {
    selectedTab: string;
}

export interface BrowserProps {

}

const tabs = [
    { id: "Tab1", text: "Tab 1" },
    { id: "Tab2", text: "Tab 2" }
]

export class Browser extends React.Component<BrowserProps, BrowserState> {
    constructor(props: BrowserProps) {
        super(props);
        this.state = {
            selectedTab: 'Tab1'
        }
    }

    getTabs = () => {
        const { selectedTab } = this.state;

        return tabs.map(tab => (
            <div key={tab.id} onClick={this.getTabOnClick(tab.id)} className={`Tab ${tab.id === selectedTab ? 'Active' : ''}`}>
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