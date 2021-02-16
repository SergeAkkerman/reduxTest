import React from "react";
import { connect } from "react-redux";

const ShowText = ({ state }) => (
	<div>{ state }</div>
	)

const mapStateToProps = state => {
	const text1 = state;
	console.log ({text1});
	return {text1};	
}

export default connect(mapStateToProps)(ShowText);