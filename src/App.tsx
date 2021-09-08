import React from 'react';
import './App.css';
import { Chat } from './chat/Chat';
import { Browser } from './browser/Browser';
import { Flag, FlagManager, FlagMap } from './FlagManager';
import { BrowserManager } from './BrowserManager';

export interface AppState {
  FlagMap: FlagMap;
}

class App extends React.Component<any, AppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      FlagMap: {}
    }
    console.log(this.state);
  }

  setFlag = (flag: Flag, val: boolean) => {
    console.log(this.state);
    this.setState({
      FlagMap: {
        ...this.state.FlagMap,
        [flag]: val
      }
    });
  }

  helperMethods = {
    setFlag: this.setFlag
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
