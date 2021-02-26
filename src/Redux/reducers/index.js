import { combineReducers } from "redux";

import text3_reducer from "./bbb";
import text2_reducer from "./qqq";
import text1_reducer from "./xxx";

export default combineReducers({ text2:text2_reducer, text3:text3_reducer, text1:text1_reducer });