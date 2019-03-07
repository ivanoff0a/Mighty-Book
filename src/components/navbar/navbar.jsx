import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
	render() {
		require('bootstrap');
		return(
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link to={'/'} className="navbar-brand">{this.props.appName}</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse"
						data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
						aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link to={'/addHero'} className="nav-link">Add Hero</Link>
						</li>
						<li className="nav-item">
							<Link to={'/heroPics'} className="nav-link">Heroes' Pics</Link>
						</li>
						<li className="nav-item">
							<Link to={'/settings'} className="nav-link">Settings</Link>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}