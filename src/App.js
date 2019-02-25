import React, { Component } from 'react';
import Navbar from './components/navbar/navbar.jsx';
import Herolist from './components/herolist/herolist.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      appName: 'Mighty Book',
      heroes: [
        {
          name: 'Thor',
          desc: 'God Of Party'
        },
        {
          name: 'Jimbo',
          desc: 'Starcraft nerd'
        }
      ]
    }
  }

  render() {
    return (
      <>
        <Navbar appName={this.state.appName}/>
        <Herolist heroes={this.state.heroes}/>
      </>
    );
  }
}

export default App;
