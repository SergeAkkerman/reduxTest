import React from "react";
import { connect } from "react-redux";

const ShowText = ({result}) => (
	<div>
	{result.map((content, index) => {
		return (<p>{content}</p>)
	})}
	</div>
	)

const mapStateToProps = state => {
	const { text1 } = state;
	const result = text1.texts;
	console.log(result);
	return { result };	
}

export default connect(mapStateToProps)(ShowText);