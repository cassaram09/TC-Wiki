import React from 'react';

const JiraTickets = () => {
	return (
		<div>
			<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
				<h1>Jira Tickets</h1>
			</div>
			<div className="card mb-3">
				<div className="card-header">
					<ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
						<li className="nav-item">
							<a
								className="nav-link active"
								id="createTicket-tab"
								data-toggle="tab"
								href="#createTicket"
								role="tab"
								aria-controls="createTicket"
								aria-selected="true"
							>
								Creating a Ticket
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link"
								id="access-tab"
								data-toggle="tab"
								href="#access"
								role="tab"
								aria-controls="access"
								aria-selected="false"
							>
								Access
							</a>
						</li>
					</ul>
				</div>
				<div className="tab-content " id="myTabContent">
					<div
						className="tab-pane fade show active card-body"
						id="createTicket"
						role="tabpanel"
						aria-labelledby="createTicket-tab"
					>
						<p>
							While creating the Jira ticket if possible stay on with student to get all the neseccary info - if
							not, don't <code>qbot done</code> the question until the Ticket is done (let the dispatcher
							know). To create a Jira ticket click the button at the bottom of any chat:
						</p>
						<img src="/log-bug-report.png" alt="" class="img-thumbnail mb-3" /><br/>

						<div className="btn-group">
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://github.com/flatiron-labs/learn-support/blob/master/escalation.md#how-to-report-an-issue-through-jira"
								className="btn btn-sm btn-outline-secondary"
							>
								How to put in a Jira Ticket
							</a>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://github.com/flatiron-labs/technical-coach-resources/blob/master/jira-tickets.md"
								className="btn btn-sm btn-outline-secondary"
							>
								How to create a good Jira ticket
							</a>
						</div>
					</div>
					<div className="tab-pane fade card-body" id="access" role="tabpanel" aria-labelledby="access-tab">
						<p class="text-warning">
							Please let your TC Lead or Ruth know immediately if you <strong>do not have access</strong> to
							Jira.
						</p>
					</div>
				</div>
			</div>

			<div className="table-wrapper">
				<div className="d-flex justify-content-between align-items-end">
					<h2>Jira Issue Priority Definitions</h2>
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

				<table className="table table-bordered table-sm mb-3">
					<thead>
						<tr>
							<th scope="col">
								<b>Prority Level</b>
							</th>
							<th scope="col">
								<b>Definition</b>
							</th>
							<th scope="col">
								<b>Expected turn around (internal deadline)</b>
							</th>
							<th scope="col">
								<b>Process</b>
							</th>
							<th scope="col">
								<b>Examples</b>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr class="table-danger">
							<th scope="row">Blocker</th>
							<td>
								- A paying student is running into a blocking issue that does not let them proceed.
								<br />- A user is trying to sign up for paid content but cannot
								<br />- Admin issues (major site-wide blocking issues for everyone)
								<br />- 4 or more free users have reported the same issue over the course of 1-2 shifts
							</td>
							<td>Immediate</td>
							<td align="left">
								Create Jira issue and mark it as Blocker, Jira integration drops it into #Escalation in Slack,
								@here the channel to draw attention to the issue.
								<br />
								<br />Tell the student:
								<br />
								<br />&quot;I've notified the team here about this issue and they will get back to you as soon
								as possible&quot;
								<br />
								<br />Leave the question open so that if the dev team responds immediately, you can keep
								working with the student.
							</td>
							<td align="left">
								PAID
								<br />- Paid user IDE not working
								<br />- Paid user account 500ing / 404 (their course pages, NOT their profile page)
								<br />- Unable to complete any lessons
								<br />- Can't access their track
								<br />- Can't access billing
								<br />- Learn is down
								<br />
								<br />FREE
								<br />- cannot enroll in a paying course
								<br />
								<br />ADMIN
								<br />- /expert-chat is empty/broken
								<br />- overall the Learn IDE is broken
								<br />- all of Learn.co is down
							</td>
						</tr>
						<tr class="table-warning">
							<th scope="row">High</th>
							<td align="left">
								- A non-paying student is running into a blocking issue that does not let them proceed.
								<br />- Any student is running into an issue that is causing them to have a poor product
								experience, but it is not blocking them.
							</td>
							<td align="left">24 hours or so</td>
							<td align="left">
								Create Jira issue and mark it as High. Tech Support will take it from here.
								<br />
								<br />Tell the student:
								<br />
								<br />&quot;I have let our team here know about the issue and they'll be working on this
								within the next business day. Someone will reach out to you if more action is required on your
								end. That being the case, is it alright if we mark this resolved for now?&quot;
							</td>
							<td align="left">
								PAID
								<br />- Paying user has issues with (assessments, blog, neighbors, study group, etc)
								<br />- Chat issues
								<br />- None of the student's lights are flipping (but user can proceed)
								<br />
								<br />FREE
								<br />- Free user's IDE not working
								<br />- Free user can't access a free track
								<br />- Free user is getting 500 / 404
								<br />- Chat issues
								<br />
								<br />
							</td>
						</tr>
						<tr class="table-success">
							<th scope="row">Medium</th>
							<td align="left">
								- An issue that needs to be addressed but does not need to be fixed for a couple of business
								days. It's an issue, but not creating a poor user experience every time they do something on
								Learn.
							</td>
							<td align="left">A couple of days</td>
							<td align="left">
								Create Jira issue and mark it as Medium. Tech Support will take it from there.
								<br />
								<br />Tell the student:
								<br />
								<br />&quot;I have let our team here know about the issue and they'll be working on this
								within the next couple of business days. Someone will reach out to you if more action is
								required on your end. That being the case, is it alright if we mark this resolved for
								now?&quot;
								<br />
							</td>
							<td>
								PAID
								<br />- Slack invitation issues
								<br />- Progress/completion data on Learn is incorrect (home page)
								<br />- Switching blog type
								<br />
								<br />FREE
								<br />- None of the student's lights are responding (but user can proceed)
								<br />
							</td>
						</tr>
						<tr>
							<th scope="row">Low</th>
							<td>
								- An issue that would be nice to fix, but can be addressed down the road during a clean up
								week.
							</td>
							<td>When we get around to it</td>
							<td>
								Create Jira issue and mark it as Low. Tech Support will take it from there.
								<br />
								<br />Tell the student:
								<br />
								<br />&quot;I have let our team here know about the issue and they'll get to this when they
								have a chance. Someone will reach out to you if more action is required on your end. That
								being the case, is it alright if we mark this resolved for now?&quot;
								<br />
							</td>
							<td>
								GENERAL ISSUES
								<br />- Visual quirks, such as misspelling, text overlapping
								<br />- Feature requests or improvements
								<br />- The occasional light isn't flipping
								<br />
								<br />FREE
								<br />- Slack invitation issues
								<br />- Progress/completion data on Learn is incorrect (home page)
								<br />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default JiraTickets;
