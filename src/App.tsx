import React from 'react';
import './App.css';
import { Chat } from './chat/Chat';
import { Browser, TabId } from './browser/Browser';
import { Flags, FlagMap } from './Flags';
import { BrowserListener } from './BrowserListener';
import ChatEventListener from './chat/ChatEventListener';

import en from './strings/en.json';
import { LocaleMap } from './CommonProps';
export interface AppState {
  FlagMap: FlagMap;
  BrowserListener: BrowserListener;
  ChatEventListener: ChatEventListener;
  LocaleStrings: LocaleMap;
}

class App extends React.Component<any, AppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      FlagMap: {},
      BrowserListener: () => null,
      ChatEventListener: () => null,
      LocaleStrings: en as LocaleMap
    }
  }

  setFlag = (flag: Flags, val: boolean) => {
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
    this.state.BrowserListener(tabId, pageId);
  }

  setChatEventListener = (ChatEventListener: ChatEventListener) => {
    this.setState({
      ChatEventListener
    });
  }

  triggerChatEvent = (eventKey: string) => {
    this.state.ChatEventListener(eventKey);
  }

  helperMethods = {
    setFlag: this.setFlag,
    setBrowserListener: this.setBrowserListener,
    navigateBrowser: this.navigateBrowser,
    setChatEventListener: this.setChatEventListener,
    triggerChatEvent: this.triggerChatEvent
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
