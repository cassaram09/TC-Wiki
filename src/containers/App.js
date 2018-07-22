import React from 'react';

// Components
import SearchResults from '../components/SearchResults';
import Aaq from '../components/Aaq';
import StudyGroups from '../components/StudyGroups';
import OneOnOnes from '../components/OneOnOnes';
import CurriculumUpdates from '../components/CurriculumUpdates';
import QuickLinks from '../components/QuickLinks';
import TeamInfo from '../components/TeamInfo';

const App = () => (
	<div className="row">
		<div className="col-xl-8 mb-4">
			<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom ">
				<h1>Welcome to the TC Dashboard</h1>
			</div>
			<SearchResults />
			<QuickLinks />
			<TeamInfo />
			<div className="row">
				<div className="col-lg-8">
					<Aaq />
				</div>
				<div className="col-lg-4">
					<StudyGroups />
					<OneOnOnes />
				</div>
			</div>
		</div>
		<div className="col-xl-4 updates-container">
			<CurriculumUpdates />
		</div>
	</div>
);

export default App;
