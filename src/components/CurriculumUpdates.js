import React, { Component } from 'react';
import { Github } from './Svg';

class CurriculumUpdates extends Component {
	constructor() {
		super();

		this.state = {
			updates: []
		};
	}

	fetchEvents = () => {
		return fetch(`https://api.github.com/orgs/learn-co-curriculum/events`, {
			headers: {
				Accept: 'application/vnd.github.v3.text-match+json'
			}
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);

				this.setState({
					updates: data
				});
			});
	};

	formatDate = date => {
		var monthNames = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];

		var day = date.getDate();
		var monthIndex = date.getMonth();
		var year = date.getFullYear();
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var today = new Date();

		var todayDate = `${today.getFullYear()}${today.getMonth()}${today.getDate()}`;
		var commitDate = `${year}${monthIndex}${day}`;

		var ampm = hours >= 12 ? 'PM' : 'AM';
		hours = hours % 12;
		hours = hours ? hours : 12; // the hour '0' should be '12'
		minutes = minutes < 10 ? '0' + minutes : minutes;
		var strTime = hours + ':' + minutes + ' ' + ampm;

		return todayDate === commitDate
			? `Today · ${strTime}`
			: `${day} ${monthNames[monthIndex]} ${year} · ${strTime}`;
	};

	render() {
		return (
			<React.Fragment>
				<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
					<h1>Curriculum Updates</h1>
					<button
						type="button"
						className="btn curriculum-update-button btn-sm btn-outline-secondary"
						onClick={this.fetchEvents}
					>
						<Github />
					</button>
				</div>

				<ul className={this.state.updates.length !== 0 && 'timeline'}>
					{this.state.updates
						.filter(
							event =>
								event.type === 'IssuesEvent' ||
								event.type === 'IssueCommentEvent' ||
								event.type === 'PushEvent'
						)
						.map(update => (
							<li className="event">
								<p className="text-muted">{this.formatDate(new Date(update.created_at))}</p>

								<a
									target="_blank"
									href={update.repo.url.replace('https://api.github.com/repos/', 'https://github.com/')}
								>
									<h5>{update.repo.name.split('/').pop()}</h5>
								</a>

								<div className="description">
									{update.payload.issue ? (
										<span>Issue Title: {update.payload.issue.title}</span>
									) : (
										<span>
											Commits:
											<ul>
												{update.payload.commits.map(commit => (
													<li key={commit.sha}>
														<a
															target="_blank"
															href={`${update.repo.url.replace(
																'https://api.github.com/repos/',
																'https://github.com/'
															)}/commit/${commit.sha}`}
														>
															{commit.message}
														</a>
													</li>
												))}
											</ul>
										</span>
									)}
								</div>
								<small className="text-muted">
									Event: {update.type.replace('Event', '')}{' '}
									{update.payload.action && `(${update.payload.action})`}
								</small>
							</li>
						))}
				</ul>
			</React.Fragment>
		);
	}
}

export default CurriculumUpdates;
