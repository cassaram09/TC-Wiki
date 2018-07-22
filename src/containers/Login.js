import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { githubLogin, getUser } from '../actions/userActions';
import { Github } from '../components/Svg';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			signin: true,
			signup: false
		};
	}

	componentDidMount() {
		this.props.getUser();
	}

	// Send user back to home if logged in already
	componentWillMount() {
		if (this.props.user !== null) {
			this.props.history.push('/');
		}
	}

	// // Redirect user to home after logging in
	componentWillReceiveProps(nextProps) {
		if (nextProps.user !== null) {
			nextProps.history.push('/');
		}
	}

	handleChange = e => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		});
	};

	render() {
		return (
			<div className="login">
				<button type="button" className="" onClick={this.props.githubLogin}>
					<Github />{"   "}
					Login with Github
				</button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.user
	};
};

export default connect(
	mapStateToProps,
	{
		githubLogin,
		getUser
	}
)(Login);
