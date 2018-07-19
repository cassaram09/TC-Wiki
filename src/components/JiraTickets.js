import React from 'react';

const JiraTickets = () => {
	return (
		<div>
			<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
				<h1>Jira Tickets</h1>
			</div>
			Jira Tickets: Let your TC Lead or Ruth know if you do not have access to create a Jira ticket click the
			button at the bottom of the chat
			<ul>
				<li>
					<a href="https://github.com/flatiron-labs/technical-coach-resources/blob/master/jira-tickets.md">
						How to create a good Jira ticket
					</a>
				</li>
				<li>
					<a href="https://github.com/flatiron-labs/learn-support/blob/master/escalation.md#how-to-report-an-issue-through-jira">
						How to put in a Jira Ticket
					</a>
				</li>
				<li>
					<a href="https://docs.google.com/spreadsheets/d/1_yr-CsT0hIfSEcz9vv9yjkRGWQLeKmG40SNjywphoOc/edit#gid=0">
						Jira Issue Priority definitions
					</a>
				</li>
			</ul>
		</div>
	);
};

export default JiraTickets;
