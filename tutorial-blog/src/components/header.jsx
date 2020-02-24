import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

	render() {
		return (
			<React.Fragment>
				<header className="row">
					<div className="col-1"></div>
					<nav className="col-10 primary-nav-styling">
						<ul>
							<li><Link to="/"><img className="nav-logo" src="/images/logo.png" alt="Futura Furniture Logo" /></Link></li>
							<li><Link className="mt-2" to="/">Home</Link></li>
							<li><Link className="mt-2" to="/products">Products</Link></li>
							<li><Link className="mt-2" to="/about">About</Link></li>
							<li className="float-right mt-2"><Link to="/cart">Cart</Link></li>
						</ul>
					</nav>
					<div className="col-1"></div>
				</header>
			</React.Fragment>
		);
	}

}

export default Header;
