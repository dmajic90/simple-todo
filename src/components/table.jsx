import React, { Component, Fragment } from 'react';
import Task from './task';
import './table.css';

class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			tasks: []
		};
		this.textChange = this.textChange.bind(this);
		this.addTask = this.addTask.bind(this);
		this.removeTask = this.removeTask.bind(this);
	}
	textChange(e) {
		this.setState({ text: e.target.value });
	}
	addTask(e) {
		const { tasks, text } = this.state;
		tasks.push(text);
		this.setState({ tasks });
		this.setState({ text: '' });
	}
	removeTask(e) {
		const elements = document.getElementsByClassName('task-finished');
		while (elements.length > 0) {
			elements[0].parentNode.remove();
		}
	}

	render() {
		const { tasks } = this.state;
		return (
			<Fragment>
				<ul>
					{tasks.map(text => (
						<Task text={text} />
					))}
				</ul>
				<input
					type="text"
					name="taskText"
					placeholder="Enter a new task"
					value={this.state.text}
					onChange={this.textChange}
				/>
				<input
					type="button"
					name="addTask"
					value="Add a new task"
					onClick={this.addTask}
				/>
				<input
					type="button"
					name="removeFinishedTasks"
					value="Remove finished tasks"
					onClick={this.removeTask}
				/>
			</Fragment>
		);
	}
}

export default Table;
