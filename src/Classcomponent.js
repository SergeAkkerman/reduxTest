import React from 'react'

export default class Classcomponent extends React.Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 name : "Sergey"
		}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState({
			name : "FUCK YOU ASSHOLE!"
		})
	}
	render() {
		return (
			<div>
				<h1>Class component {this.state.name}</h1>
				<button onClick={this.handleClick}>Click</button>
			</div>
		)
	}
}