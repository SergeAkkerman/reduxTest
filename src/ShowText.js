import React from "react";
import { connect } from "react-redux";

const ShowText = (text1) => {
	 console.log(text1);
	return (
	<div>{text1.id}</div>
	)}

const mapStateToProps = state => {
	const text1 = state;
	console.log ({text1});
	return { text1 };	
}

export default connect(mapStateToProps)(ShowText);