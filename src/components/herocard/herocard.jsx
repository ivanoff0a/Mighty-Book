import React, { Component } from 'react';

export default class HeroCard extends Component{
    render() {
        return(
            <div className="col-md-4 col-sm-6 col-md-3 col-lg-3 hero__container">
                <div className="card hero__item">
                    <img src={this.props.data.pic} className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.data.name}</h5>
                            <p className="card-text">{this.props.data.desc}</p>
                            <a href="#" className="btn btn-primary">Skills</a>
                        </div>
                </div>
            </div>
        )
    }
}
