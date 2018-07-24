import { FETCH_REPOS_BEGIN, FETCH_REPOS_SUCCESS, FETCH_REPOS_FAILURE, CLEAR_REPOS, NO_MATCH_FOUND } from './actionTypes';

const fetchReposBegin = () => ({
	type: FETCH_REPOS_BEGIN
});

const fetchReposSuccess = repos => ({
	type: FETCH_REPOS_SUCCESS,
	payload: { repos }
});

const fetchReposError = error => ({
	type: FETCH_REPOS_FAILURE,
	payload: { error }
});

const noMatchFound = (searchTerm) => ({
	type: NO_MATCH_FOUND,
	payload: searchTerm
})

export function fetchRepos(searchTerm) {
	return dispatch => {
		dispatch(fetchReposBegin());

		return fetch(
			`https://api.github.com/search/code?q=${searchTerm}+repo:flatiron-labs/technical-coach-resources&access_token=89b8bbc3d350078a1af91cc3e8278436d33b4181`,
			{
				headers: {
					Accept: 'application/vnd.github.v3.text-match+json'
				}
			}
		)
			.then(res => res.json())
			.then(data => {
				if (data.total_count !== 0) {
					dispatch(fetchReposSuccess(data));
					return data;
				} else {
					dispatch(noMatchFound(searchTerm));
				}
			})
			.catch(error => {
				dispatch(fetchReposError(error));
			});
	};
}

export const clearResults = () => {
	return dispatch => {
		dispatch({
			type: CLEAR_REPOS
		});
	};
};
