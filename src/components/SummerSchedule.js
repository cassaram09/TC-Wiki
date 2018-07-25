import React from 'react';

export const AaqSchedule = () => (
	<div className="mb-4 table-responsive">
		<table className="table table-bordered table-sm table-striped">
			<thead>
				<tr>
					<td colSpan="17"><strong>Monday - Thursday</strong></td>
				</tr>
			</thead>
			<thead>
				<tr>
					<td>8AM</td>
					<td>9AM</td>
					<td>10AM</td>
					<td>11AM</td>
					<td>12PM</td>
					<td>1PM</td>
					<td>2PM</td>
					<td>3PM</td>
					<td>4PM</td>
					<td>5PM</td>
					<td>6PM</td>
					<td>7PM</td>
					<td>8PM</td>
					<td>9PM</td>
					<td>10PM</td>
					<td>11PM</td>
					<td>12AM</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td />
					<td />
					<td />
					<td />
					<td />
					<td />
					<td />
					<td />
					<td />
					<td />
					<td />
					<td />
					<td colSpan="5" class="table-orange">
						8PM - 1AM
					</td>
				</tr>
				<tr>
					<td />
					<td />
					<td />
					<td colSpan="4" class="table-warning">
						11AM - 3PM (MATT)
					</td>
					<td colSpan="5" class="table-secondary">
						3PM - 8PM (AMELIE)
					</td>
					<td colSpan="5" class="table-orange">
						8PM - 1AM
					</td>
				</tr>
				<tr>
					<td />
					<td />
					<td />
					<td colSpan="4" class="table-warning">
						11AM - 3PM
					</td>
					<td colSpan="4" class="table-secondary">
						3PM - 7PM
					</td>
					<td />
					<td />
					<td />
					<td />
					<td />
					<td />
				</tr>
				<tr>
					<td />
					<td />
					<td />
					<td colSpan="4" class="table-warning">
						11AM - 3PM
					</td>
					<td colSpan="4" class="table-secondary">
						3PM - 7PM
					</td>
					<td colSpan="4" class="table-info">
						7PM - 11PM (DUSTIN)
					</td>
					<td />
					<td />
				</tr>
				<tr>
					<td />
					<td />
					<td />
					<td colSpan="4" class="table-warning">
						11AM - 3PM
					</td>
					<td colSpan="4" class="table-secondary">
						3PM - 7PM
					</td>
					<td colSpan="4" class="table-info">
						7PM - 11PM
					</td>
					<td />
					<td />
				</tr>
				<tr>
					<td />
					<td colSpan="4" class="table-danger">
						9AM - 1PM
					</td>
					<td colSpan="4" class="table-success">
						1PM - 5PM
					</td>
					<td colSpan="5" class="table-primary">
						5PM - 10PM
					</td>
					<td />
					<td />
					<td />
				</tr>
				<tr>
					<td colSpan="5" class="table-danger">
						8AM - 12PM (ERIKA)
					</td>
					<td colSpan="4" class="table-success">
						1PM - 5PM
					</td>
					<td colSpan="5" class="table-primary">
						5PM - 10PM
					</td>
					<td />
					<td />
					<td />
				</tr>
			</tbody>
		</table>

		<table className="table table-bordered table-sm table-striped">
			<thead>
				<tr>
					<td colSpan="17"><strong>Friday - Sunday</strong></td>
				</tr>
			</thead>
			<thead>
				<tr>
					<td>8AM</td>
					<td>9AM</td>
					<td>10AM</td>
					<td>11AM</td>
					<td>12PM</td>
					<td>1PM</td>
					<td>2PM</td>
					<td>3PM</td>
					<td>4PM</td>
					<td>5PM</td>
					<td>6PM</td>
					<td>7PM</td>
					<td>8PM</td>
					<td>9PM</td>
					<td>10PM</td>
					<td>11PM</td>
					<td>12PM</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td />
					<td />
					<td />
					<td />
					<td />
					<td />
					<td />
					<td />
					<td />
					<td />
					<td />
					<td colSpan="5" class="table-info">
						7PM - 12AM
					</td>
					<td />
				</tr>
				<tr>
					<td />
					<td />
					<td />
					<td colSpan="4" class="table-warning">
						11AM - 3PM
					</td>
					<td colSpan="4" class="table-secondary">
						3PM - 7PM
					</td>
					<td colSpan="5" class="table-info">
						7PM - 12AM
					</td>
					<td />
				</tr>
				<tr>
					<td />
					<td colSpan="4" class="table-danger">
						9AM - 1PM
					</td>
					<td colSpan="4" class="table-success">
						1PM - 5PM
					</td>
					<td colSpan="5" class="table-primary">
						5PM - 10PM
					</td>
					<td />
					<td />
					<td />
				</tr>
				<tr>
					<td />
					<td colSpan="4" class="table-danger">
						9AM - 1PM
					</td>
					<td colSpan="4" class="table-success">
						1PM - 5PM
					</td>
					<td colSpan="5" class="table-primary">
						5PM - 10PM
					</td>
					<td />
					<td />
					<td />
				</tr>
			</tbody>
		</table>
	</div>
);

export const StudyGroupSchedule = () => (
	<div className="table-responsive">
		<table className="table table-bordered table-sm mb-4 table-striped">
			<thead>
				<tr>
					<th>SUNDAY</th>
					<th>MONDAY</th>
					<th>TUESDAY</th>
					<th>WEDNESDAY</th>
					<th>THURSDAY</th>
					<th>FRIDAY</th>
					<th>SATURDAY</th>
				</tr>
			</thead>

			<tbody>
				<tr>
					<td class="table-success">10AM - 11AM</td>
					<td class="table-success">10AM - 11AM</td>
					<td class="table-success">10AM - 11AM</td>
					<td class="table-success">10AM - 11AM</td>
					<td class="table-success">10AM - 11AM</td>
					<td class="table-success">10AM - 11AM</td>
					<td class="table-success">10AM - 11AM</td>
				</tr>
				<tr>
					<td class="table-danger">11AM - 12PM</td>
					<td class="table-danger">11AM - 12PM</td>
					<td class="table-danger">11AM - 12PM</td>
					<td class="table-danger">11AM - 12PM</td>
					<td class="table-danger">11AM - 12PM</td>
					<td class="table-danger">11AM - 12PM</td>
					<td class="table-danger">11AM - 12PM</td>
				</tr>
				<tr>
					<td class="table-info">12PM - 1PM</td>
					<td />
					<td />
					<td />
					<td />
					<td />
					<td class="table-info">12PM - 1PM</td>
				</tr>

				<tr>
					<td />
					<td class="table-primary">8PM - 9PM</td>
					<td class="table-primary">8PM - 9PM</td>
					<td class="table-primary">8PM - 9PM</td>
					<td class="table-primary">8PM - 9PM</td>
					<td />
					<td />
				</tr>
				<tr>
					<td />
					<td class="table-primary">8PM - 9PM</td>
					<td class="table-primary">8PM - 9PM</td>
					<td class="table-warning">9PM - 10PM</td>
					<td class="table-primary">8PM - 9PM</td>
					<td />
					<td />
				</tr>
				<tr>
					<td />
					<td class="table-warning">9PM - 10PM</td>
					<td class="table-warning">9PM - 10PM</td>
					<td />
					<td class="table-warning">9PM - 10PM</td>
					<td />
					<td />
				</tr>
				<tr>
					<td />
					<td />
					<td class="table-warning">9PM - 10PM</td>
					<td />
					<td class="table-warning">9PM - 10PM</td>
					<td />
					<td />
				</tr>
			</tbody>
		</table>
	</div>
);

export const OneOnOneSchedule = () => (
	<div className="mb-4">
		<h5>Weekdays (Sunday - Thursday)</h5>
		<p>4PM - 7PM and 7PM - 10PM</p>
	</div>
);
