import { SHOW_TEXT_ONE } from "../actionTypes";
import { SHOW_TEXT_TWO } from "../actionTypes";
import { SHOW_TEXT_THREE } from "../actionTypes";

const initialState = {
	texts: [],
	ids: []
};

const text1_reducer = (state = initialState, action) => {
	switch(action.type){
		case SHOW_TEXT_ONE: {
			const { id, content1 } = action.payload;
			return {
				...state,
				texts: [...state.texts, content1],
				ids: [...state.ids, id]
			}
		}

		default:
		return state;
	}
}

export default text1_reducer;