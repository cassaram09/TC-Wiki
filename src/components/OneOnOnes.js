import React from 'react';
import { OneOnOneSchedule } from './SummerSchedule';

const OneOnOnes = ({ more = true }) => {
	return (
		<div>
			<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4 border-bottom">
				<h1>1:1s</h1>
			</div>

			<div className="list-group mb-4">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/flatiron-labs/technical-coach-resources/blob/master/support_coach/guide.md"
					className="list-group-item list-group-item-action flex-column align-items-start "
				>
					<div className="d-flex w-100 justify-content-between">
						<h5 className="mb-1">1:1 Support Coach Guide</h5>
					</div>
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://docs.google.com/presentation/d/1vKWF3bsL3fs0aG5lfO6YetTM-0cGd8p45mCc927R1TI/edit#slide=id.p"
					className="list-group-item list-group-item-action flex-column align-items-start "
				>
					<div className="d-flex w-100 justify-content-between">
						<h5 className="mb-1">1:1 Support Coach Slide deck</h5>
					</div>
				</a>
			</div>
			{more && (
				<React.Fragment>
					<h2>Summer Schedule</h2>
					<OneOnOneSchedule />
				</React.Fragment>
			)}
		</div>
	);
};

export default OneOnOnes;
