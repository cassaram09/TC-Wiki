import React from 'react';
import { AaqSchedule, StudyGroupSchedule, OneOnOneSchedule } from './SummerSchedule';
import TeamInfo from './TeamInfo';

const OngoingInfo = ({ more = true }) => (
	<div>
		<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
			<h1>Ongoing Info</h1>
		</div>
		<TeamInfo />
		{more && (
			<React.Fragment>
				<h3 id="tcmeetingvideos">TC Meeting Videos</h3>
				<ul>
					<li>
						<a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=dlyx0UsD1VY">
							Feb 2018
						</a>{' '}
						- Study Group Training
					</li>
				</ul>
				<ul>
					<li>
						<a href="https://docs.google.com/forms/d/e/1FAIpQLSeOIlOz585-yyF2PhWzpZykipKV4CrqvD1STZLilhhTdvSrLw/viewform">
							Peer Observation Form
						</a>
					</li>
					<li>Schedule and Hours</li>
					<ul>
						<li>Submitting hours</li>
						<li>Drop / Swapping shifts</li>
					</ul>
					<li>Curriculum</li>
					<ul>
						<li>Improving Curriculum</li>
						<li>Raising an issue</li>
					</ul>
					<li>Meetings</li>
					<ul>
						<li>Weekly meetings with team</li>
						<li>Montly meetings with all tcs</li>
						<li>1:1s with TCL</li>
					</ul>
				</ul>
				<a href="https://docs.google.com/presentation/d/10WuZTplcXRMmMHFhZ1dFYTKp2_cg893VNukQ5LyFAGo/edit#slide=id.g3816fe66c8_0_40">
					tc debuging framework
				</a>
				No shifts on WeWork Holidays! no AAQ, Study Groups, or 1:1 Support during a WeWork Holiday
				<h2>Summer Schedule (All times are in ET)</h2>
				<h3>AAQ</h3>
				<AaqSchedule />
				<hr />
				<h3>Study Groups</h3>
				<StudyGroupSchedule />
				<hr />
				<h3 className="mt-3">1:1 Support</h3>
				<OneOnOneSchedule />
			</React.Fragment>
		)}
	</div>
);

export default OngoingInfo;
