import React from 'react';
import { AaqSchedule, StudyGroupSchedule, OneOnOneSchedule } from './SummerSchedule';
import TeamInfo from './TeamInfo';
import QuickLinks from './QuickLinks';

const GeneralInfo = ({ more = true }) => (
	<div>
		<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
			<h1>General Info</h1>
		</div>
		{more && <QuickLinks />}
		<TeamInfo />
		{more && (
			<React.Fragment>
				<h3 id="tcmeetingvideos">TC Meeting Videos</h3>
				<div className="btn-group mr-2 mb-2">
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.youtube.com/watch?v=dlyx0UsD1VY"
						className="btn btn-sm btn-outline-secondary"
					>
						Feb 2018 (Study Group Training)
					</a>
				</div>
				<h3>Hours, Breaks, Meetings, and Holidays</h3>

				<div className="card mb-3">
					<div className="card-header">
						<ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
							<li className="nav-item">
								<a
									className="nav-link active"
									id="shifts-tab"
									data-toggle="tab"
									href="#shifts"
									role="tab"
									aria-controls="shifts"
									aria-selected="true"
								>
									Shifts
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									id="breaks-tab"
									data-toggle="tab"
									href="#breaks"
									role="tab"
									aria-controls="breaks"
									aria-selected="false"
								>
									Breaks
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									id="meetings-tab"
									data-toggle="tab"
									href="#meetings"
									role="tab"
									aria-controls="meetings"
									aria-selected="false"
								>
									Meetings
								</a>
							</li>
						</ul>
					</div>
					<div className="tab-content " id="myTabContent">
						<div
							className="tab-pane fade show active card-body"
							id="shifts"
							role="tabpanel"
							aria-labelledby="shifts-tab"
						>
							<ul>
								<li>
									Make sure you submit your hours every week before EOD Saturday, if you don't manage to do so
									you need to message Ruth.
								</li>
								<li>
									<a href="#">How to submit hours</a>
								</li>
								<li>
									<a href="#">How to drop/swap shifts</a>
								</li>
								<li>There will be no shifts on WeWork Holidays!</li>
							</ul>
						</div>
						<div className="tab-pane fade card-body" id="breaks" role="tabpanel" aria-labelledby="breaks-tab">
							<ul>
								<li>You may take one 10 min break during a 4 to 5 hour shift.</li>
								<li>You may take one 30 min and one 10 min break if you work 8 consecutive hours.</li>
							</ul>
						</div>
						<div
							className="tab-pane fade card-body"
							id="meetings"
							role="tabpanel"
							aria-labelledby="meetings-tab"
						>
							<ul>
								<li>There will be 1 montly meeting with all the TCs and TCLs</li>
								<li>You will have 2 1:1s with your TCL every month</li>
								<li>You may have 2-4 meetings with your team per month</li>
							</ul>
						</div>
					</div>
				</div>

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

export default GeneralInfo;
