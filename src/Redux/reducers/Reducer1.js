import { SHOW_TEXT1 } from "../actionTypes";

const initialState = {
	text: "WITHOUT TEXT 1"
};

const text1 = (state = initialState, action) => {
	switch(action.type){
		case SHOW_TEXT1: {
			const { id, content } = action.payload;
			return {
				...state,
				text: [...state.text, id]
			}
		}
		default:
		return state;
	}
}

export default text1;