import { auth, githubProvider } from '../firebase';
import { GET_USER, USER_STATUS } from './actionTypes';

export function githubLogin() {
	return dispatch => auth.signInWithPopup(githubProvider);
}

export function logout() {
	return dispatch => auth.signOut();
}

export function getUser() {
	return dispatch => {
		dispatch({
			type: USER_STATUS,
			payload: true
		});

		auth.onAuthStateChanged(user => {
			dispatch({
				type: GET_USER,
				user: user
			});

			dispatch({
				type: USER_STATUS,
				payload: false
			});
		});
	};
}
