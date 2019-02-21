import React, { Component } from 'react';
import Navbar from './components/navbar/navbar.jsx'

class App extends Component {
  constructor() {
    super();
    this.state = {
      appName: 'Mighty Book'
    }
  }

  render() {
    return (
      <Navbar appName={this.state.appName}/>
    );
  }
}

export default App;
