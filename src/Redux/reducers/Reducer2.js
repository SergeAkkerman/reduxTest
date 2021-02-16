import { SHOW_TEXT2 } from "../actionTypes";

const initialState = {
	text: "WITHOUT TEXT 2"
};

const text2 = (state = initialState, action) => {
	switch(action.type){
		case SHOW_TEXT2: {
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

export default text2;