import React from 'react';
import './App.css';
import { Chat } from './chat/Chat';
import { Browser } from './browser/Browser';
import { FlagManager } from './FlagManager';
import { BrowserManager } from './BrowserManager';

const flagManager: FlagManager = new FlagManager();
const browserManager: BrowserManager = new BrowserManager();

function App() {
  return (
    <div className="App">
      <Chat BrowserManager={browserManager} FlagManager={flagManager} />
      <Browser BrowserManager={browserManager} FlagManager={flagManager} />
    </div>
  );
}

export default App;
