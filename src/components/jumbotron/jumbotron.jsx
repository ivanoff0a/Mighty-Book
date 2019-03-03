import React, { Component } from 'react';

export default class Jumbotron extends Component{
    render() {
        return(
            <div className="jumbotron jumbotron-fluid">
                <h1 className="display-4">{this.props.appName}</h1>
                <p className="lead">{this.props.appDesc}</p>
            </div>
        )
    }
}