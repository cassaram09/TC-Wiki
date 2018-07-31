import React from 'react';

const TeamInfo = () => (
	<div className="row mb-4">
		<div className="col-lg-5">
			<h2>TC Teams</h2>
			<div className="table-responsive">
				<table className="table table-striped table-sm">
					<thead>
						<tr>
							<th>Erika</th>
							<th>Dustin</th>
							<th>Matt</th>
							<th>Amelie</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Aysan</td>
							<td>David</td>
							<td>Ashley</td>
							<td>Jon</td>
						</tr>
						<tr>
							<td>Dalia</td>
							<td>James</td>
							<td>Brad</td>
							<td>Katerina</td>
						</tr>
						<tr>
							<td>Jennifer</td>
							<td>Justin</td>
							<td>Ian</td>
							<td>Ben</td>
						</tr>
						<tr>
							<td>Sophia</td>
							<td>Kevin</td>
							<td>Josh</td>
							<td>Chris</td>
						</tr>
						<tr>
							<td>Nicole</td>
							<td>Nick</td>
							<td>PJ</td>
							<td>Seth</td>
						</tr>
						<tr>
							<td>Rochel</td>
							<td>Tyler</td>
							<td>Lindsay</td>
							<td />
						</tr>
						<tr>
							<td />
							<td>Mohammed</td>
							<td></td>
							<td />
						</tr>
						<tr>
							<td />
							<td>Omar</td>
							<td />
							<td />
						</tr>
					</tbody>
				</table>
				<small className="text-muted">
					TCL (Technical Coach Lead), TC (Technical Coach), TCF (Technical Coach Fellow)
				</small>
			</div>
		</div>
		<div className="col-lg-7">
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="http://help.learn.co/instructional-support/receiving-course-support/who-are-the-section-leads"
			>
				<h2>Section Leads</h2>
			</a>

			<div className="table-responsive">
				<table className="table table-striped table-sm">
					<thead>
						<tr>
							<th>Section</th>
							<th>Lead</th>
							<th>Email</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Pre-CLI (Intro to Ruby - HTML/CSS)</td>
							<td>Nancy Noyes</td>
							<td>nancy.noyes@flatironschool.com</td>
						</tr>
						<tr>
							<td>CLI (Procedural Ruby to Object Oriented Ruby)</td>
							<td>Kenlyn Terai</td>
							<td>kenlyn@flatironschool.com</td>
						</tr>
						<tr>
							<td>Sinatra</td>
							<td>Howard DeVennish</td>
							<td>howard@flatironschool.com</td>
						</tr>
						<tr>
							<td>Rails</td>
							<td>Luisa Scavo</td>
							<td>luisa@flatironschool.com</td>
						</tr>
						<tr>
							<td>JavaScript</td>
							<td>Alice Balbuena</td>
							<td>alice@flatironschool.com</td>
						</tr>
						<tr>
							<td>React and Redux</td>
							<td>Alice Balbuena</td>
							<td>alice@flatironschool.com</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
);

export default TeamInfo;
