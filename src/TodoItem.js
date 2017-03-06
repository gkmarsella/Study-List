import React, {Component} from 'react'

export default class TodoItem extends Component {
	constructor(props){
		super(props); //sets up inhertience chain form component
		this.props
	}
	render() {
		return (
			<li>{this.props.title} - {this.props.description}</li>
		);
	}
}