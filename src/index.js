import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import App from './containers/App';
import Loading from './containers/Loading';
import Authentication from './containers/Authentication';
import Login from './containers/Login';
import StudyGroups from './components/StudyGroups';
import Aaq from './components/Aaq';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import OneOnOnes from './components/OneOnOnes';
import CurriculumUpdates from './components/CurriculumUpdates';
import VirtualBox from './components/VirtualBox';
import GeneralInfo from './components/GeneralInfo';
import JiraTickets from './components/JiraTickets';
import CommonErrors from './components/CommonErrors';
import Learning from './components/Learning';
import Feedback from './components/Feedback';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Loading>
				<Switch>
					<Route exact path="/login" component={Login} />
					<Authentication>
						<div className="app">
							<Navbar />
							<div className="container-fluid h-100">
								<div className="row h-100">
									<Sidebar />
									<main role="main" className="col col-md-9 col-xl-10">
										<Switch>
											<Route exact path="/" component={App} />
											<Route exact path="/study-groups" component={StudyGroups} />
											<Route exact path="/aaq" component={Aaq} />
											<Route exact path="/one-on-ones" component={OneOnOnes} />
											<Route exact path="/curriculum-updates" component={CurriculumUpdates} />
											<Route exact path="/general-info" component={GeneralInfo} />
											<Route exact path="/virtual-box" component={VirtualBox} />
											<Route exact path="/jira-tickets" component={JiraTickets} />
											<Route exact path="/common-errors" component={CommonErrors} />
											<Route exact path="/learning" component={Learning} />
											<Route exact path="/feedback" component={Feedback} />
										</Switch>
									</main>
								</div>
							</div>
						</div>
					</Authentication>
				</Switch>
			</Loading>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
