import React, { Component } from 'react';

export default class HeroCard extends Component{
    render() {
        return(
            <div className="col-md-3">
                <div className="card">
                    <div className="card-header">
                        <h1>{this.props.data.name}</h1>
                    </div>
                    <div className="card-body">
                        <p>{this.props.data.desc}</p>
                    </div>
                </div>
            </div>
        )
    }
}