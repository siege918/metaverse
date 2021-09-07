import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Window } from './Window';
import { Chat } from './chat/Chat';

function App() {
  return (
    <div className="App">
      <Chat />
      <Window title="FlameWolf" className="Browser" />
    </div>
  );
}

export default App;
