import React, { Component } from 'react';
import data from  './data';
import Parent from './components/Parent';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1> treeview </h1>
        <Parent data={data} />
      </div>
    );
  }
}

export default App;
