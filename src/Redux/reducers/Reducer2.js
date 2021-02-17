import { SHOW_TEXT_TWO } from "../actionTypes";

const initialState = {
	text: "WITHOUT TEXT 2"
};

const text2 = (state = initialState, action) => {
	switch(action.type){
		case SHOW_TEXT_TWO: {
			const { content } = action.payload;
			return {
				...state,
				text: [...state.text]
			}
		}
		default:
		return state;
	}
}

export default text2;