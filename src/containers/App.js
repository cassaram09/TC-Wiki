import React from 'react';

// Components
import SearchResults from '../components/SearchResults';
import Aaq from '../components/Aaq';
import StudyGroups from '../components/StudyGroups';
import OneOnOnes from '../components/OneOnOnes';
import CurriculumUpdates from '../components/CurriculumUpdates';
import QuickLinks from '../components/QuickLinks';
import TeamInfo from '../components/TeamInfo';
import GeneralInfo from '../components/GeneralInfo';

const App = () => (
	<div className="row">
		<div className="col-xl-8 mb-4">
			<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom ">
				<h1>Welcome to the TC Dashboard</h1>
			</div>
			<p>
				This is a place where all the TC Resources are collected to help you find things more easily. If you
				feel like there is something missing or there is a feature you would like to see, please send me
				message on slack @amelie - any kind feedback is welcome.
			</p>
			<SearchResults />
			<QuickLinks />
			<div className="row">
				<div className="col">
					<Aaq more={false} />
				</div>
			</div>
			<div className="row">
				<div className="col-lg-8">
					<StudyGroups more={false} />
				</div>
				<div className="col-lg-4">
					<OneOnOnes more={false} />
				</div>
			</div>
			<GeneralInfo more={false} />
		</div>
		<div className="col-xl-4 updates-container">
			<CurriculumUpdates />
		</div>
	</div>
);

export default App;
