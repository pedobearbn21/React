import React from 'react';
import './App.css';
import Page1 from './page1';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello
      </header>
      <container className="App-Container">
        <Page1 name="EN"/>
      </container>
    </div>
  );
}

export default App;
