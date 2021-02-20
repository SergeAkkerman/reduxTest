import { SHOW_TEXT_TWO } from "../actionTypes";

const initialState = {
	texts: [],
	ids: []
};

const text2 = (state = initialState, action) => {
	switch(action.type){
		case SHOW_TEXT_TWO: {
			const { id, content } = action.payload;
			return {
				...state,
				texts: [...state.texts, content],
				ids: [...state.ids, id]
			}
		}
		default:
		return state;
	}
}

export default text2;