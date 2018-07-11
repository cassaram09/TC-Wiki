import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ handleInputChange, fetchRepos, logout }) => (
	<nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
		<a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
			TC Dashboard
		</a>

		<ul className="navbar-nav px-3">
			<li className="nav-item text-nowrap">
				<NavLink exact to="/login" className="nav-link" onClick={logout} title="Sign Out">
					Sign Out
				</NavLink>
			</li>
		</ul>
	</nav>
);

export default Navbar;
