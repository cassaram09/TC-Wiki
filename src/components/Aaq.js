import React from 'react';
import { AaqSchedule } from './SummerSchedule';
import NavCard from './NavCard';

const Aaq = ({ more = true }) => {
	const snippets = [
		{
			title: 'After Chat',
			tag: 'chat',
			body: `Great job! You've got this! Also don't forget to resolve the question, we'd love to get feedback from you!`
		},
		{
			title: '8h',
			tag: 'eightHours',
			body:
				"Hi there! We noticed that you haven't touched this question in the last 8 hours so we're going to mark it as resolved for now. Please feel free to ask another question if you get stuck!"
		},
		{
			title: "TC's are Back",
			tag: 'tcsBack',
			body: 'Tech Coaches are back for the day, let us know if you still need help with this.'
		},
		{
			title: 'More Help',
			tag: 'moreHelp',
			body: 'Hi! Do you still need help with this?'
		},
		{
			title: 'Resolve',
			tag: 'resolve',
			body:
				"Thanks for using AAQ, based on the message I am assuming we can close this question. If you need any more help please don't hesitate to ask!"
		}
	];

	const escalation = [
		{
			title: 'Expert Chat Down',
			tag: 'expertChatDown',
			body: `<p>
			Send an <code>@here</code> message in the
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://learn-co.slack.com/messages/G0B6FET6G"
			>
				Online Web Developer Channel
			</a>
			in the student slack (learn.co) to tell students that they should ask questions in Slack until
			the chat is back up.
		</p>
		<p>
							Example:
							<code>
								@here expert chat is down at the moment, in the meantime please send us your questions here.
							</code>
						</p>`
		},
		{
			title: 'Slack Down',
			tag: 'slackDown',
			body: `Start a group
				<a href="https://support.google.com/hangouts/answer/3111943?hl=en&co=GENIE.Platform%3DDesktop">
					Google Hangout group chat</a>`
		},
		{
			title: 'Rude Student',
			tag: 'rudeStudent',
			body: `<p>Add a note to the students profile (at the bottom of chat):</p>
			<img src="/leave-note.png" alt="" class="img-thumbnail" />`
		},
		{
			title: 'Slow Day',
			tag: 'slowDay',
			body: `<ul>
			<li>Resolve old questions</li>
		</ul>`
		},
		{
			title: 'Project Support in AAQ',
			tag: 'project',
			body: `<h5>We do not help students with their project in AAQ.</h5>
				<p>
					If a student needs help with their project even if its environment support please give them the
					<a href="https://theflatironschool.typeform.com/to/B9BrgH">project support link</a> and any
					additional resources that they need. Most students who are having GitHub, environment issues in
					project mode is because their files are not set up correctly which can be solved by sending them
					to the correct lesson that shows file structure and sharing the 1:1 support link.
				</p>`
		}
	];

	const tips = [
		{
			title: 'Tools',
			tag: 'tools',
			body: `<p>Tool suggestions to make your shift smoother:</p>
			<ul>
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://chrome.google.com/webstore/detail/le3/hjjhpafjpkkjbdchnaeikofponobhngc"
					>
						Learn Expert Extension
					</a>
				</li>
				<li>
					<a href="https://itunes.apple.com/us/app/bettersnaptool/id417375580?mt=12">
						Better Snap Tool
					</a>
					(Mac)
				</li>
				<li>
					Snippet manager e.g. <a href="https://kapeli.com/dash">Dash</a> or
					<a href="https://www.alfredapp.com/help/features/snippets/">Alfreds Snippets</a> (Mac)
				</li>
			</ul>`
		},
		{
			title: 'Getting the Solution',
			tag: 'solution',
			body: `<p>How to best get to the solutions when helping a student, you can:</p>
				<ul>
					<li>Go to the solution branch</li>
					<li>Go to pull requests to see other students solutions in one place</li>
					<li>Have your labs on your machine and open them there</li>
					<li>
						Clone down students code (this allows you to
						<a href="https://stackoverflow.com/questions/9834689/comparing-two-branches-in-git">
							see a diff
						</a>
						with the solution branch)
					</li>
				</ul>`
		}
	];

	return (
		<div>
			<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
				<h1>AAQ</h1>
			</div>

			<h2>Quick Snippets</h2>
			<NavCard snippets={snippets} />

			<h2>Escalation</h2>
			<NavCard snippets={escalation} />

			{more && (
				<React.Fragment>
					<h2>Tips</h2>
					<NavCard snippets={tips} />

					<h2>Summer Schedule</h2>
					<AaqSchedule />
				</React.Fragment>
			)}
		</div>
	);
};

export default Aaq;
