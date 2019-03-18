import React, { Component } from 'react';
import Navbar from './components/navbar/navbar.jsx';
import { Route } from 'react-router-dom';
import HeroList from './components/herolist/herolist.jsx';
import Jumbotron from "./components/jumbotron/jumbotron";
import Settings from './components/settings/settings.jsx';
import AddHero from './components/addhero/addhero.jsx';
import HeroPics from './components/heropics/heropics.jsx';
import Routes from './constants/Routes.js';

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
          pic: 'https://news.nte4.com/wp-content/uploads/2017/11/thor.jpg',
          gender: 'Male'
        },
        {
          name: 'Jimbo',
          desc: 'Starcraft nerd',
          pic: 'http://www.fanpop.com/images/polls/19717_1_full.jpg',
          gender: 'Male'
        },
        {
          name: 'Jesus Christ',
          desc: 'Simply God',
          pic: 'https://www.findshepherd.com/wp-content/uploads/2017/07/Jesus-Imagesthe-Second-Coming-of-Jesus-Christ.jpg',
          gender: 'Male'
        },
        {
          name: 'Lenin',
          desc: 'The Communist',
          pic: 'https://i1.wp.com/marinamaral.com/wp-content/uploads/2018/04/e4787-teste.jpg?w=775&ssl=1',
          gender: 'Male'
        },
        {
          name: 'Babushka',
          desc: 'God Of Puncake',
          pic: 'https://dazedimg-dazedgroup.netdna-ssl.com/700/azure/dazed-prod/1250/7/1257706.jpg',
          gender: 'Female'
        }
      ]
    }
  }

  render() {
    console.log(this.state.heroes);
    let heroPicMassive = this.state.heroes.map(hero => {
      return hero.pic;
    })

    return (
        <>
          <Navbar appName={this.state.appName}/>
          <Jumbotron appName={this.state.appName} appDesc={this.state.appDesc}/>
          <Route exact path={Routes.HERO_LIST}
                 render={(props) => <HeroList heroes={this.state.heroes}/>}/>
          <Route path={Routes.HERO_PICS}
                 render={(props) => <HeroPics pics={heroPicMassive}/>}/>
          <Route path={Routes.ADD_HERO}
                 render={(props) => <AddHero {...props} addHeroCard={this.addHeroCard.bind(this)}/>}/>
          <Route path={Routes.SETTINGS} component={Settings}/>
        </>
    );
  }

  addHeroCard = (hero) => {
    this.setState({
      heroes: [...this.state.heroes, hero]
    })
  }

}

export default App;