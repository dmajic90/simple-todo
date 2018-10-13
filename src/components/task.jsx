import React, { Component } from 'react';
import './task.css';

class Task extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: this.props.text,
			checked: false
		};
		this.handleCheck = this.handleCheck.bind(this);
	}

	handleCheck() {
		this.setState({ checked: !this.state.checked });
	}
	render() {
		return (
			<div className="task-container">
				<span className={this.getTextClasses()}>{this.state.text}</span>
				<input
					className="task-checkbox"
					type="checkbox"
					onChange={this.handleCheck}
				/>
			</div>
		);
	}

	getTextClasses() {
		let classes = 'task-text task-';
		if (this.state.checked === false) {
			classes += 'unfinished';
		} else {
			classes += 'finished';
		}
		return classes;
	}
}

export default Task;
