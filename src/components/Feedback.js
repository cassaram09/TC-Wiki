import React, { Component } from 'react';
import { connect } from 'react-redux';
import _map from 'lodash/map';

// Actions
import { getFeedback, saveFeedbackItem, deleteFeedbackItem } from '../actions/feedbackActions';

class Feedback extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			type: '',
			text: '',
			feedback: this.props.feedback || {}
		};
	}

	componentDidMount() {
		this.props.getFeedback();
	}

	handleChange = e => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.saveFeedbackItem({
			name: this.state.name,
			type: this.state.type,
			text: this.state.text,
			uid: this.props.uid
		});

		this.setState({
			name: '',
			text: ''
		});
	};

	handleDeleteFeedbackItem = id => {
		var result = window.confirm('Are you sure?');
		result && this.props.deleteFeedbackItem(id);
	};

	arrayify = obj => {
		let array = [];
		for (let key in obj) if (obj.hasOwnProperty(key)) array.push([key, obj[key]]);
		return array;
	};

	sortProperties = obj => {
		return this.arrayify(obj).sort((a, b) => b[1].votes - a[1].votes);
	};

	renderFeedback = () => {
		const { feedback } = this.props;

		return _map(this.sortProperties(feedback), item => {
			return (
				<div key={item[0]} className="card">
					{/* <div className="card-header">
						Feedback
					</div> */}
					<div className="card-body">
						<p className="card-text">{item[1].text}</p>
						<p className="card-text">
							{this.props.uid === item[1].uid && (
								<button
									className="btn btn-outline-secondary btn-sm"
									onClick={() => this.handleDeleteFeedbackItem(item[0])}
								>
									Delete
								</button>
							)}
						</p>
					</div>
				</div>
			);
		});
	};

	render() {
		return (
			<div>
				<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4 border-bottom">
					<h1>Feedback</h1>
				</div>
				<p>
					Please fill out any feedback you have in the form below - any kind of feedback is welcome! Everybody will be able to see your feedback or suggestion, if you prefer giving it in private you can send me a message on slack @amelie. <strong>You can always delete your own feedback.</strong>
				</p>
				<form onSubmit={this.handleSubmit} className="mb-4">
					{/* <div className="form-row">
						<div className="form-group col-md-8">
							<input
								type="text"
								className="form-control"
								id="inputName"
								placeholder="Name"
								name="name"
								onChange={this.handleChange}
								value={this.state.name}
							/>
						</div>
						<div className="form-group col-md-4">
							<select id="inputState" className="form-control">
								<option selected>Type of Feedback...</option>
								<option>General Feedback</option>
								<option>Feature Wish</option>
								<option>Bug</option>
							</select>
						</div>
					</div> */}
					<div className="form-group">
						<textarea
							className="form-control"
							id="feedback-area"
							placeholder="Feedback"
							rows="3"
							name="text"
							onChange={this.handleChange}
							value={this.state.text}
						/>
					</div>
					<button type="submit" className="btn btn-secondary">
						Submit
					</button>
				</form>

				<div className="card-columns">{this.renderFeedback()}</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		feedback: state.feedback,
		uid: state.user.uid
	};
};

export default connect(
	mapStateToProps,
	{ saveFeedbackItem, getFeedback, deleteFeedbackItem }
)(Feedback);
