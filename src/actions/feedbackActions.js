import {
	GET_FEEDBACK,
	DELETE_FEEDBACK_ITEM,
	UPDATE_FEEDBACK_ITEM,
	SUBMIT_FEEDBACK_ITEM
} from './actionTypes';
import { feedbackDb } from '../firebase';

export function getFeedback() {
	return dispatch => {
		let feedback = {};

		feedbackDb.get().then(querySnapshot => {
			querySnapshot.forEach(doc => {
				feedback = { ...feedback, [doc.id]: doc.data() };
			});

			dispatch({
				type: GET_FEEDBACK,
				payload: feedback
			});
		});
	};
}

export function saveFeedbackItem(feedbackItem) {
	return dispatch => {
		feedbackDb
			.add(feedbackItem)
			.then(function(docRef) {
				var withId = { [docRef.id]: feedbackItem };
				dispatch({
					type: SUBMIT_FEEDBACK_ITEM,
					payload: withId
				});
			})
			.catch(function(error) {
				console.error(error);
			});
	};
}

export function deleteFeedbackItem(id) {
	return dispatch => {
		feedbackDb
			.doc(id)
			.delete()
			.then(function() {
				dispatch({
					type: DELETE_FEEDBACK_ITEM,
					payload: id
				});
			})
			.catch(function(error) {
				console.error(error);
			});
	};
}

export function updateFeedbackItem(id, feedbackItem) {
	return dispatch => {
		feedbackDb.child(id).update(feedbackItem);

		dispatch({
			type: UPDATE_FEEDBACK_ITEM,
			payload: { id, feedbackItem }
		});
	};
}
