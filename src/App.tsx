import React from 'react';
import './App.css';
import { Chat } from './chat/Chat';
import { Browser } from './browser/Browser';
import { FlagManager } from './FlagManager';

const flagManager: FlagManager = new FlagManager();

function App() {
  return (
    <div className="App">
      <Chat FlagManager={flagManager} />
      <Browser FlagManager={flagManager} />
    </div>
  );
}

export default App;
