import React from 'react';
import { AaqSchedule } from './SummerSchedule';

const Aaq = ({ more = true }) => (
	<div>
		<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
			<h1>AAQ</h1>
		</div>

		<h2>Quick Snippets</h2>
		<div className="card mb-3">
			<div className="card-header">
				<ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
					<li className="nav-item">
						<a
							className="nav-link active"
							id="afterChat-tab"
							data-toggle="tab"
							href="#afterChat"
							role="tab"
							aria-controls="afterChat"
							aria-selected="true"
						>
							After Chat
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link"
							id="eightHours-tab"
							data-toggle="tab"
							href="#eightHours"
							role="tab"
							aria-controls="eightHours"
							aria-selected="false"
						>
							8h
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link"
							id="back-tab"
							data-toggle="tab"
							href="#back"
							role="tab"
							aria-controls="back"
							aria-selected="false"
						>
							TC's are Back
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link"
							id="moreHelp-tab"
							data-toggle="tab"
							href="#moreHelp"
							role="tab"
							aria-controls="moreHelp"
							aria-selected="false"
						>
							More Help?
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link"
							id="close-tab"
							data-toggle="tab"
							href="#close"
							role="tab"
							aria-controls="close"
							aria-selected="false"
						>
							Resolve
						</a>
					</li>
				</ul>
			</div>
			<div className="tab-content " id="myTabContent">
				<div
					className="tab-pane fade show active card-body"
					id="afterChat"
					role="tabpanel"
					aria-labelledby="afterChat-tab"
				>
					Great job! You've got this! Also don't forget to resolve the question, we'd love to get feedback
					from you!
				</div>
				<div
					className="tab-pane fade card-body"
					id="eightHours"
					role="tabpanel"
					aria-labelledby="eightHours-tab"
				>
					Hi there! We noticed that you haven't touched this question in the last 8 hours so we're going to
					mark it as resolved for now. Please feel free to ask another question if you get stuck!
				</div>
				<div className="tab-pane fade card-body" id="back" role="tabpanel" aria-labelledby="back-tab">
					Tech Coaches are back for the day, let us know if you still need help with this.
				</div>
				<div className="tab-pane fade card-body" id="moreHelp" role="tabpanel" aria-labelledby="moreHelp-tab">
					Hi! Do you still need help with this?
				</div>
				<div className="tab-pane fade card-body" id="close" role="tabpanel" aria-labelledby="close-tab">
					Thanks for using AAQ, based on the message I am assuming we can close this question. If you need any
					more help please don't hesitate to ask!
				</div>
			</div>
		</div>

		<h2>Escalation</h2>

		<div className="card mb-3">
			<div className="card-header">
				<ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
					<li className="nav-item">
						<a
							className="nav-link active"
							id="expertChatDown-tab"
							data-toggle="tab"
							href="#expertChatDown"
							role="tab"
							aria-controls="expertChatDown"
							aria-selected="true"
						>
							Expert Chat Down
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link"
							id="slackDown-tab"
							data-toggle="tab"
							href="#slackDown"
							role="tab"
							aria-controls="slackDown"
							aria-selected="false"
						>
							Slack Down
						</a>
					</li>

					<li className="nav-item">
						<a
							className="nav-link"
							id="rudeStudent-tab"
							data-toggle="tab"
							href="#rudeStudent"
							role="tab"
							aria-controls="rudeStudent"
							aria-selected="false"
						>
							Rude Student
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link"
							id="slowDay-tab"
							data-toggle="tab"
							href="#slowDay"
							role="tab"
							aria-controls="slowDay"
							aria-selected="false"
						>
							Slow Day
						</a>
					</li>
				</ul>
			</div>
			<div className="tab-content " id="myTabContent">
				<div
					className="tab-pane fade show active card-body"
					id="expertChatDown"
					role="tabpanel"
					aria-labelledby="expertChatDown-tab"
				>
					<p>
						Send an <code>@here</code> message in the{' '}
						<a target="_blank" rel="noopener noreferrer" href="https://learn-co.slack.com/messages/G0B6FET6G">
							Online Web Developer Channel
						</a>{' '}
						in the student slack (learn.co) to tell students that they should ask questions in Slack until the chat is back up.
					</p>
					<p>
						Example:{' '}
						<code>
							@here expert chat is down at the moment, in the meantime please send us your questions here.
						</code>
					</p>
				</div>
				<div
					className="tab-pane fade card-body"
					id="slackDown"
					role="tabpanel"
					aria-labelledby="slackDown-tab"
				>
					Start a group{' '}
					<a href="https://support.google.com/hangouts/answer/3111943?hl=en&co=GENIE.Platform%3DDesktop">
						Google Hangout group chat
					</a>.
				</div>

				<div
					className="tab-pane fade card-body"
					id="rudeStudent"
					role="tabpanel"
					aria-labelledby="rudeStudent-tab"
				>
					Add a note to the students profile (at the bottom of chat):
					<img src="/leave-note.png" alt="" class="img-thumbnail mt-3" />
				</div>
				<div className="tab-pane fade card-body" id="slowDay" role="tabpanel" aria-labelledby="slowDay-tab">
					<ul>
						<li>Resolve old questions</li>
					</ul>
				</div>
			</div>
		</div>
		{more && (
			<React.Fragment>
				<h2>Tips</h2>
				<ul>
					<li>Watch Slack & AAQ</li>
					<li>Tools to consider:</li>
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
							<a href="https://itunes.apple.com/us/app/bettersnaptool/id417375580?mt=12">Better Snap Tool</a>{' '}
							(Mac)
						</li>
						<li>
							Snippet manager e.g. <a href="https://kapeli.com/dash">Dash</a> or{' '}
							<a href="https://www.alfredapp.com/help/features/snippets/">Alfreds Snippets</a> (Mac)
						</li>
					</ul>
					<li>How to best get to the solutions when helping a student, you can:</li>
					<ul>
						<li>Go to the solution branch</li>
						<li>Go to pull requests to see other students solutions in one place</li>
						<li>Have your labs on your machine and open them there</li>
						<li>
							Clone down students code (this allows you to{' '}
							<a href="https://stackoverflow.com/questions/9834689/comparing-two-branches-in-git">
								see a diff
							</a>{' '}
							with the solution branch)
						</li>
					</ul>
				</ul>
				<h5>We do not help students with their project in AAQ.</h5>
				<p>
					If a student needs help with their project even if its environment support please give them the
					project support link and any additional resources that they need.
					(https://project-support1.youcanbook.me/). Most students who are having GitHub, environment issues
					in project mode is because their files are not set up correctly which can be solved by sending them
					to the correct lesson that shows file structure and sharing the 1:1 support link.
				</p>

				<h2>Summer Schedule</h2>
				<AaqSchedule />
			</React.Fragment>
		)}
	</div>
);

export default Aaq;
