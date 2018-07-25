import React from 'react';
import NavCard from './NavCard';

const JiraTickets = () => {
	const jira = [
		{
			title: 'Creating a Ticket',
			tag: 'creatingTicket',
			body: `<p>
			While creating the Jira ticket if possible stay on with student to get all the neseccary info -
			if not, don't <code>qbot done</code> the question until the ticket is done (let the dispatcher
			know). To create a Jira ticket click the button at the bottom of any chat:
		</p>
		<img src="/log-bug-report.png" alt="" class="img-thumbnail mb-4" />
		<br />

		<div class="btn-group">
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://github.com/flatiron-labs/learn-support/blob/master/escalation.md#how-to-report-an-issue-through-jira"
				class="btn btn-sm btn-outline-secondary"
			>
				How to put in a Jira Ticket
			</a>
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://github.com/flatiron-labs/technical-coach-resources/blob/master/jira-tickets.md"
				class="btn btn-sm btn-outline-secondary"
			>
				How to create a good Jira ticket
			</a>`
		},
		{
			title: 'Access',
			tag: 'access',
			body: `<p class="text-warning">
			Please let your TC Lead or Ruth know immediately if you <strong>do not have access</strong> to
			Jira.
		</p>`
		}
	];


	return (
		<div>
			<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4 border-bottom">
				<h1>Jira Tickets</h1>
			</div>
		
			<NavCard snippets={jira} />

			<div className="table-responsive jira-table">
				<div className="d-flex justify-content-between align-items-end">
					<h3>Jira Issue Priority Definitions</h3>
					<small>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://docs.google.com/spreadsheets/d/1_yr-CsT0hIfSEcz9vv9yjkRGWQLeKmG40SNjywphoOc/edit#gid=0"
						>
							Jira Issue Priority Definitions
						</a>
					</small>
				</div>

				<table className="table table-bordered table-sm mb-4">
					<thead>
						<tr>
							<th scope="col" className="table-5">
								Prority Level
							</th>
							<th scope="col" className="table-18">
								Definition
							</th>
							<th scope="col" className="table-8">
								Expected turnaround <small>(internal DL)</small>
							</th>
							<th scope="col" className="table-30">
								Process
							</th>
							<th scope="col">Examples</th>
						</tr>
					</thead>
					<tbody>
						<tr class="table-danger">
							<th scope="row">Blocker</th>
							<td>
								<ul>
									<li>A paying student is running into a blocking issue that does not let them proceed.</li>
									<li>A user is trying to sign up for paid content but cannot</li>
									<li>Admin issues (major site-wide blocking issues for everyone)</li>
									<li>4 or more free users have reported the same issue over the course of 1-2 shifts</li>
								</ul>
							</td>
							<td>Immediate</td>
							<td>
								<ul>
									<li>
										Create Jira issue and mark it as Blocker, Jira integration drops it into #Escalation in
										Slack, @here the channel to draw attention to the issue.
									</li>
									<li>
										Tell the student:{' '}
										<code>
											I've notified the team here about this issue and they will get back to you as soon as
											possible
										</code>
									</li>
									<li>
										Leave the question open so that if the dev team responds immediately, you can keep working
										with the student.
									</li>
								</ul>
							</td>
							<td>
								<h6>PAID</h6>
								<ul>
									<li>Paid user IDE not working</li>
									<li>Paid user account 500ing / 404 (their course pages, NOT their profile page)</li>
									<li>Unable to complete any lessons</li>
									<li>Can't access their track</li>
									<li>Can't access billing</li>
									<li>Learn is down</li>
								</ul>
								<h6>FREE</h6>
								<ul>
									<li>cannot enroll in a paying course</li>
								</ul>
								<h6>ADMIN</h6>
								<ul>
									<li>/expert-chat is empty/broken</li>
									<li>overall the Learn IDE is broken</li>
									<li>all of Learn.co is down</li>
								</ul>
							</td>
						</tr>
						<tr class="table-warning">
							<th scope="row">High</th>
							<td>
								<ul>
									<li>
										A non-paying student is running into a blocking issue that does not let them proceed.
									</li>
									<li>
										Any student is running into an issue that is causing them to have a poor product
										experience, but it is not blocking them.
									</li>
								</ul>
							</td>
							<td>24 hours or so</td>
							<td>
								<ul>
									<li>Create Jira issue and mark it as High. Tech Support will take it from here.</li>
									<li>
										Tell the student:{' '}
										<code>
											I have let our team here know about the issue and they'll be working on this within the
											next business day. Someone will reach out to you if more action is required on your end.
											That being the case, is it alright if we mark this resolved for now?
										</code>
									</li>
								</ul>
							</td>
							<td>
								<h6>PAID</h6>
								<ul>
									<li>Paying user has issues with (assessments, blog, neighbors, study group, etc)</li>
									<li>Chat issues</li>
									<li>None of the student's lights are flipping (but user can proceed)</li>
								</ul>

								<h6>FREE</h6>
								<ul>
									<li>Free user's IDE not working</li>
									<li>Free user can't access a free track</li>
									<li>Free user is getting 500 / 404</li>
									<li>Chat issues</li>
								</ul>
							</td>
						</tr>
						<tr class="table-success">
							<th scope="row">Medium</th>
							<td>
								<ul>
									<li>
										An issue that needs to be addressed but does not need to be fixed for a couple of business
										days. It's an issue, but not creating a poor user experience every time they do something
										on Learn.
									</li>
								</ul>
							</td>
							<td>A couple of days</td>
							<td>
								<ul>
									<li>Create Jira issue and mark it as Medium. Tech Support will take it from there.</li>
									<li>
										Tell the student:{' '}
										<code>
											I have let our team here know about the issue and they'll be working on this within the
											next couple of business days. Someone will reach out to you if more action is required
											on your end. That being the case, is it alright if we mark this resolved for now?
										</code>
									</li>
								</ul>

								<br />
							</td>
							<td>
								<h6>PAID</h6>
								<ul>
									<li>Slack invitation issues</li>
									<li>Progress/completion data on Learn is incorrect (home page)</li>
									<li>Switching blog type</li>
								</ul>
								<h6>FREE</h6>
								<ul>
									<li>None of the student's lights are responding (but user can proceed)</li>
								</ul>
							</td>
						</tr>
						<tr>
							<th scope="row">Low</th>
							<td>
								<ul>
									<li>
										An issue that would be nice to fix, but can be addressed down the road during a clean up
										week.
									</li>
								</ul>
							</td>
							<td>When we get around to it</td>
							<td>
								<ul>
									<li>Create Jira issue and mark it as Low. Tech Support will take it from there.</li>
									<li>
										Tell the student:{' '}
										<code>
											I have let our team here know about the issue and they'll get to this when they have a
											chance. Someone will reach out to you if more action is required on your end. That being
											the case, is it alright if we mark this resolved for now?
										</code>
									</li>
								</ul>
							</td>
							<td>
								<h6>GENERAL ISSUES</h6>
								<ul>
									<li>Visual quirks, such as misspelling, text overlapping</li>
									<li>Feature requests or improvements</li>
									<li>The occasional light isn't flipping</li>
								</ul>
								<h6>FREE</h6>
								<ul>
									<li>Slack invitation issues</li>
									<li>Progress/completion data on Learn is incorrect (home page)</li>
								</ul>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default JiraTickets;
