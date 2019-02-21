import React, { Component } from 'react'

export default class Navbar extends Component {
	render() {
		return(
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
			  <a className="navbar-brand" href="#">{this.props.appName}</a>
			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul className="navbar-nav mr-auto">
			      <li className="nav-item active">
			        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href="#">Link</a>
			      </li>
			    </ul>
			  </div>
			</nav>				
			)
	}
}