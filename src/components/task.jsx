import React, { Component } from 'react';
import '../styles/task.css';

class Task extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: this.props.text,
			checked: false,
			id: this.props.id
		};
		this.handleCheck = this.handleCheck.bind(this);
	}

	handleCheck() {
		this.setState({ checked: !this.state.checked });
	}
	render() {
		return (
			<li className="task-container">
				<div className="task-id">{this.state.id}</div>
				<div className={this.getTextClasses()}>
					{this.state.text}
					<input
						className="task-checkbox"
						type="checkbox"
						onChange={this.handleCheck}
					/>
				</div>
			</li>
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
