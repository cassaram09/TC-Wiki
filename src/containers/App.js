import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Actions
import { logout } from '../actions/userActions';

// Components
import Navbar from '../components/Navbar';

class App extends Component {
	constructor() {
		super();

		this.state = {
			searchTerm: '',
			searchResults: []
		};
	}

	render() {
		return (
			<div className="App">
				<Navbar
					fetchRepos={this.fetchRepos}
					handleInputChange={this.handleInputChange}
					logout={this.props.logout}
				/>
			</div>
		);
	}
}

export default withRouter(
	connect(
		null,
		{ logout }
	)(App)
);
