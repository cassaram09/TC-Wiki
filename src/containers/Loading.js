import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactLoading from 'react-loading';

// Actions
import { getUser } from '../actions/userActions';

class Loading extends Component {
	componentWillMount() {
		const { userLoading } = this.props;
		if (userLoading === undefined) {
			this.props.getUser();
		}
	}

	render() {
		const { userLoading, children } = this.props;

		if (!userLoading || this.props.user === null) {
			return <React.Fragment>{children}</React.Fragment>;
		} else {
			return <ReactLoading type="bubbles" color="#32cefe" height={64} width={64} className="loading" />;
		}
	}
}

function mapStateToProps(state) {
	return {
		user: state.user,
		userLoading: state.loading.user
	};
}

export default withRouter(
	connect(
		mapStateToProps,
		{ getUser }
	)(Loading)
);
