import { SHOW_TEXT_ONE, SHOW_TEXT_TWO, SHOW_TEXT_THREE } from "./actionTypes";

const idText1 = "idText9234";
const idText2 = "idText23456";
const idText3 = "idText234rewere56";




export const addText2 = content2 => ({
	type: SHOW_TEXT_TWO,
	payload: {
		id: idText2,
		content2
	}
});

export const addText3 = content3 => ({
	type: SHOW_TEXT_THREE,
	payload: {
		id: idText3,
		content3
	}
});

export const addText1 = content1 => ({
	type: SHOW_TEXT_ONE,
	payload: {
		id: idText1,
		content1
	}
});