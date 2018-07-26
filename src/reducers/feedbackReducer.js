import {
	GET_FEEDBACK,
	UPDATE_FEEDBACK_ITEM,
	SUBMIT_FEEDBACK_ITEM,
	DELETE_FEEDBACK_ITEM
} from '../actions/actionTypes';

export default function(state = {}, action) {
	switch (action.type) {
		case SUBMIT_FEEDBACK_ITEM:
			return { ...state, ...action.payload };
		case GET_FEEDBACK:
			return action.payload;
		case UPDATE_FEEDBACK_ITEM:
			let id = action.payload.id;
			var newFeedbackItem = { ...state[id], ...{ ...action.payload.feedbackItem } };
			return { ...state, [id]: newFeedbackItem };
		case DELETE_FEEDBACK_ITEM:
			var result = {};
			for (var key in state) {
				if (action.payload !== key) {
					result[key] = state[key];
				}
			}
			return result;
		default:
			return state;
	}
}
