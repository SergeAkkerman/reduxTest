import { SHOW_TEXT1, SHOW_TEXT2 } from "./actionTypes";

const text1 = "THIS IS TEXT1";
const text2 = "THIS IS TEXT2";

export const addText1 = content => ({
	type: SHOW_TEXT1,
	payload: {
		id: text1,
		content
	}
})

export const addText2 = content => ({
	type: SHOW_TEXT2,
	payload: {
		id: text2,
		content
	}
})