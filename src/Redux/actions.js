import { SHOW_TEXT_ONE, SHOW_TEXT_TWO } from "./actionTypes";

const idText1 = "idText1234";
const idText2 = "idText23456";


export const addText1 = content => ({
	type: SHOW_TEXT_ONE,
	payload: {
		id: idText1,
		content
	}
});

export const addText2 = content => ({
	type: SHOW_TEXT_TWO,
	payload: {
		id: idText2,
		content
	}
});