import React from "react";
import { connect } from "react-redux";

const ShowText = ({state}) => (
	<div>
	AAAA
	</div>
	)

const mapStateToProps = state => {
	var result = Object.keys(state).flatMap(function(key) {
		return state[key].texts;
	})
	console.log(result);

	return {state};	
}

export default connect(mapStateToProps)(ShowText);