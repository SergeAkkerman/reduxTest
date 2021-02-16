import React from "react";
import { connect } from "react-redux";
import { addText2 } from "./Redux/actions";

class Show_text2 extends React.Component {

 constructor(props) {
    super(props);
    this.state = { input: "This is text 2" };
  }

updateText2 = () => {
	this.props.addText2(this.state.input);
}

	render(){
		return(
			<button onClick={this.updateText2}>Show text 2</button>
			)
	}
}
export default connect(null, { addText2 })(Show_text2);