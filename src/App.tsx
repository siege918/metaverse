import React from 'react';
import './App.css';
import { Chat } from './chat/Chat';
import { Browser } from './browser/Browser';

function App() {
  return (
    <div className="App">
      <Chat />
      <Browser />
    </div>
  );
}

export default App;
