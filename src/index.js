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

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Loading>
				<Switch>
					<Route exact path="/login" component={Login} />
					<Authentication>
						<Switch>
							<Route exact path="/" component={App} />
						</Switch>
					</Authentication>
				</Switch>
			</Loading>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
