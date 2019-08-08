import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Students from './Students/Students.js';
import Users from './Users/Users.js';
import Items from './Items/Items.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Students /> */}
        <Users />
        <Items />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
      </header>
    </div>
  );
}

export default App;
