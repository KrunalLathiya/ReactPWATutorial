import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <br/>
        <Content />
      </div>
    );
  }
}

export default App;
