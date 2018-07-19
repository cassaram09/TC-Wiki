import { combineReducers } from 'redux';
import user from './userReducer';
import loading from './loadingReducer';
import search from './searchReducer';

const rootReducer = combineReducers({
	user,
	loading,
	search
});

export default rootReducer;
