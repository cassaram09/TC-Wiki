import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchRepos } from '../actions/searchActions';

class SearchBar extends Component {
	constructor() {
		super();

		this.state = {
			searchTerm: ''
		};
	}

	search = e => {
		e.preventDefault();
		const searchTerm = this.state.searchTerm;

		if (searchTerm) {
			this.props.fetchRepos(searchTerm);
		}

		this.setState({
			searchTerm: ''
		})
	};

	handleInputChange = e => {
		this.setState({
			searchTerm: e.target.value
		});
	};

	render() {
		return (
			<form onSubmit={this.search} className="w-100">
				<input
					className="form-control form-control-dark w-100"
					type="text"
					placeholder="Search GitHub"
					aria-label="Search"
					onChange={this.handleInputChange}
					value={this.state.searchTerm}
				/>
			</form>
		);
	}
}

export default connect(
	null,
	{ fetchRepos }
)(SearchBar);
