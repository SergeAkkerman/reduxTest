import React from "react";
import { connect } from "react-redux";
import { addText3 } from "./Redux/actions";

class Show_text3 extends React.Component {

 constructor(props) {
    super(props);
    this.state = { input: "This is text 3" };
  }

updateText3 = () => {
	this.props.addText3(this.state.input);
}

	render(){
		return(
			<button onClick={this.updateText3}>Show text 3</button>
			)
	}
}
export default connect(null, { addText3 })(Show_text3);