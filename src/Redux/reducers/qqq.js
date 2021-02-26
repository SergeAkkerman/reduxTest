import { SHOW_TEXT_ONE } from "../actionTypes";
import { SHOW_TEXT_TWO } from "../actionTypes";
import { SHOW_TEXT_THREE } from "../actionTypes";

const initialState = {
	texts: [],
	ids: []
};

const text2_reducer = (state = initialState, action) => {
	switch(action.type){
		case SHOW_TEXT_TWO: {
			const { id, content2 } = action.payload;
			return {
				...state,
				texts: [...state.texts, content2],
				ids: [...state.ids, id]
			}
		}

		default:
		return state;
	}
}

export default text2_reducer;