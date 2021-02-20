import { SHOW_TEXT_ONE } from "../actionTypes";

const initialState = {
	texts: [],
	ids: []
};

const text1 = (state = initialState, action) => {
	switch(action.type){
		case SHOW_TEXT_ONE: {
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

export default text1;