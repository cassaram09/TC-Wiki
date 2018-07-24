import {
	FETCH_REPOS_BEGIN,
	FETCH_REPOS_SUCCESS,
	FETCH_REPOS_FAILURE,
	CLEAR_REPOS,
	NO_MATCH_FOUND
} from '../actions/actionTypes';

const initialState = {
	repos: [],
	loading: false,
	error: null,
	matchFound: ''
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_REPOS_BEGIN:
			return {
				...state,
				loading: true,
				error: null
			};
		case FETCH_REPOS_SUCCESS:
			return {
				...state,
				loading: false,
				repos: action.payload.repos.items
			};
		case FETCH_REPOS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error,
				repos: []
			};
		case CLEAR_REPOS:
			return initialState;
		case NO_MATCH_FOUND:
			return {
				...state,
				loading: false,
				repos: [],
				matchFound: action.payload
			};
		default:
			return state;
	}
}
