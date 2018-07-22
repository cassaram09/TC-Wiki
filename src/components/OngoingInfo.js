import React from 'react';

const OngoingInfo = () => (
	<div>
		<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
			<h1>Ongoing Info</h1>
		</div>
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

		<h1>AAQ Summer Schedule?</h1>
	</div>
);

export default OngoingInfo;
