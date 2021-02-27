import React from "react";
import { connect } from "react-redux";

const ShowText = ({state}) => (
	<div>
	AAAA
	</div>
	)

const mapStateToProps = state => {
	//const { text1, text2, text3 } = state;
	//const result = text2;
	var y = [];
	for (var i in state) {
		y = state[i].texts;

	}
			console.log (y);
	//console.log(Object.keys(state));
	//console.log(state);


	return {state};	
}

export default connect(mapStateToProps)(ShowText);