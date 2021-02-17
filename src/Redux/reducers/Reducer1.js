import { SHOW_TEXT_ONE } from "../actionTypes";

const initialState = {
	text: "WITHOUT TEXT 1",
	id: ""
};

const text1 = (state = initialState, action) => {
	switch(action.type){
		case SHOW_TEXT_ONE: {
			const { id, content } = action.payload;
			return {
				...state,
				text: content,
				id: id
			}
		}
		default:
		return state;
	}
}

export default text1;