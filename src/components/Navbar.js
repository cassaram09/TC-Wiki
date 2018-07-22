import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

// Actions
import { logout } from '../actions/userActions';

// Components
import SearchBar from './SearchBar';
import { LogOut } from './Svg';

const Navbar = ({ logout }) => (
	<nav className="navbar navbar-dark fixed-top bg-dark flex-nowrap p-0 shadow">
		<NavLink exact to="/" className="navbar-brand col-lg-3 col-xl-2 col-md-3 col-auto mr-0" title="Home">
			<span className="blue">//</span> TC DASHBOARD
		</NavLink>

		<SearchBar />

		<ul className="navbar-nav px-3">
			<li className="nav-item text-nowrap">
				<NavLink exact to="/login" className="nav-link" onClick={logout} title="Sign Out">
					<LogOut />
				</NavLink>
			</li>
		</ul>
	</nav>
);

export default connect(
	null,
	{ logout }
)(Navbar);
