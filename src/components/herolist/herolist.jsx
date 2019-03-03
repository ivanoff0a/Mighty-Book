import React, { Component } from 'react';
import HeroCard from '../herocard/herocard.jsx'

export default class HeroList extends Component{
    render() {
        let heroes = this.props.heroes.map((hero, i) => {
            return(
                <HeroCard key={i} data={hero}/>
            )
        })

        return(
            <>
                <div className="herolist__container row">
                    {heroes}
                </div>
            </>
        )
    }
}