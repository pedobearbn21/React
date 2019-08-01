import React from 'react';
import './App.css';
import Page1 from './page1';
import Login from './PageLogin/LoginPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello
      </header>
      <footer className="App-Container">
        <Page1 name="EN"/>
        <Login />
      </footer>
    </div>
  );
}

export default App;
