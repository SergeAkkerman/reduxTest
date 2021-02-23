import { combineReducers } from "redux";

import text3_reducer from "./R_3";
import text2_reducer from "./R_2";
import text1_reducer from "./R_1";

export default combineReducers({ text2:text2_reducer, text3:text3_reducer, text1:text1_reducer });