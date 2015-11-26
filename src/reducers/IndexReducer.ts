import * as Redux from 'redux';
import { IndexActionTypes } from '../actions/IndexActions';

//reducer
function message(state:{ text: string, type: string } = null, action){
	switch (action.type) {
		case IndexActionTypes.CHANGE_MESSAGE:
			return action.message
		default:
			return state
	}
}
export const Reducer = Redux.combineReducers({ message });
export default Reducer;

//state creators
export interface IndexState {
	message?: { text: string, type: string }
}
export function CreateStateData(data: IndexState): IndexState {
	var state = {
		message : null,
	};
	if (data != null) {
		state = Object.assign(state, data);
	}
	return state;
}