import React from 'react';
import './App.css';
import { Chat } from './chat/Chat';
import { Browser, TabId } from './browser/Browser';
import { Flags, FlagMap } from './Flags';
import { BrowserListener } from './BrowserListener';

export interface AppState {
  FlagMap: FlagMap;
  BrowserListener: BrowserListener;
}

class App extends React.Component<any, AppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      FlagMap: {},
      BrowserListener: () => null
    }
    console.log(this.state);
  }

  setFlag = (flag: Flags, val: boolean) => {
    console.log(this.state);
    this.setState({
      FlagMap: {
        ...this.state.FlagMap,
        [flag]: val
      }
    });
  }

  setBrowserListener = (BrowserListener: BrowserListener) => {
    this.setState({
      BrowserListener
    });
  }

  navigateBrowser = (tabId: TabId, pageId: string) => {
    if (this.state.BrowserListener) {
      this.state.BrowserListener(tabId, pageId);
    }
  }

  helperMethods = {
    setFlag: this.setFlag,
    setBrowserListener: this.setBrowserListener,
    navigateBrowser: this.navigateBrowser
  }

  render() {return (
    <div className="App">
      <Chat {...this.state} {...this.helperMethods} />
      <Browser {...this.state} {...this.helperMethods} />
    </div>
  );
  }
}

export default App;
