import React, { Component } from 'react';
import HeroCard from '../herocard/herocard.jsx'

export default class Herolist extends Component{
    render() {
        let heroes = this.props.heroes.map( hero => {
            return <HeroCard key={hero.name} data={hero} />
        })

        return(
            <>
                <h1>Hero List:</h1>
                <div className="container row">
                    {heroes}
                </div>
            </>
        )
    }
}