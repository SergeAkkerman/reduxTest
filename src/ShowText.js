import React from "react";
import { connect } from "react-redux";

const ShowText = ({result}) => (
	<div>
	AAA
	</div>
	)

const mapStateToProps = state => {
	const { text1 } = state;
	const result = text1;
	console.log(result);
	return { result };	
}

export default connect(mapStateToProps)(ShowText);