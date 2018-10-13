import React, { Component, Fragment } from 'react';
import Task from './task';
import './table.css';

class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			tasks: [],
			counter: 1
		};
		this.textChange = this.textChange.bind(this);
		this.addTask = this.addTask.bind(this);
		this.removeTask = this.removeTask.bind(this);
	}
	textChange(e) {
		this.setState({ text: e.target.value });
	}
	addTask(e) {
		if (e.key === 'Enter') {
			const { tasks, text } = this.state;
			tasks.push({ text: text, key: this.state.counter });
			this.setState({ tasks });
			this.setState({ text: '' });
			this.setState({ counter: this.state.counter + 1 });
		}
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
					{tasks.map(task => (
						<Task text={task.text} key={task.key} id={task.key} />
					))}
				</ul>
				<div className="input-container">
					<input
						type="text"
						name="taskText"
						className="text-area"
						placeholder="Enter a new task"
						value={this.state.text}
						onChange={this.textChange}
						onKeyPress={this.addTask}
					/>
					<input
						type="button"
						className="button"
						name="removeFinishedTasks"
						value="Remove finished tasks"
						onClick={this.removeTask}
					/>
				</div>
			</Fragment>
		);
	}
}

export default Table;
