import { combineReducers } from 'redux';
import user from './userReducer';
import loading from './loadingReducer';
import search from './searchReducer';
import feedback from './feedbackReducer';

const rootReducer = combineReducers({
	user,
	loading,
	search,
	feedback
});

export default rootReducer;
