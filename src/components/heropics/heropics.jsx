import React, { Component } from 'react';

export default class HeroPics extends Component {
    render() {
        let heroPic = this.props.pics.map( img => {
            return (
                <div className='heropics__item'>
                    <img src={img}/>
                </div>
            )
        })
        return (
            <>
                <section className="pics">
                    <h1>Heroes' Pics</h1>
                    <div className="heropics__container row">
                        {heroPic}
                    </div>
                </section>
            </>
        )
    }
}
