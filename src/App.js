import React, { Component } from 'react';
import Navbar from './components/navbar/navbar.jsx';
import { Route } from 'react-router-dom';
import HeroList from './components/herolist/herolist.jsx';
import Jumbotron from "./components/jumbotron/jumbotron";
import Settings from './components/settings/settings.jsx';
import AddHero from './components/addhero/addhero.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      appName: 'Mighty Book',
      appDesc: 'This is a table game with unique cards',
      heroes: [
        {
          name: 'Thor',
          desc: 'God Of Parties',
          pic: 'https://news.nte4.com/wp-content/uploads/2017/11/thor.jpg'
        },
        {
          name: 'Jimbo',
          desc: 'Starcraft nerd',
          pic: 'http://www.fanpop.com/images/polls/19717_1_full.jpg'
        }
      ]
    }
  }

  render() {
    return (
      <>
        <Navbar appName={this.state.appName}/>
        <Jumbotron appName={this.state.appName} appDesc={this.state.appDesc}/>
        <Route exact path="/"
               render={(props) => <HeroList heroes={this.state.heroes}/>}/>
        <Route path="/addHero" component={AddHero}/>
        <Route path="/settings" component={Settings}/>
      </>
    );
  }
}

export default App;
