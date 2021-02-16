import React from "react";
import { connect } from "react-redux";
import { addText1 } from "./Redux/actions";

class Show_text1 extends React.Component {

 constructor(props) {
    super(props);
    this.state = { input: "This is text 1" };
  }

updateText1 = () => {
	this.props.addText1(this.state.input);
}

	render(){
		return(
			<button onClick={this.updateText1}>Show text 1</button>
			)
	}
}
export default connect(null, { addText1 })(Show_text1);