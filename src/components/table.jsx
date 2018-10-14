import React, { Component } from 'react';
import Task from './task';
import '../styles/table.css';

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
			this.checkTask(this.state.text);
		}
	}

	checkTask(t) {
		if (t !== '') {
			const { tasks, text } = this.state;
			tasks.push({ text: text, key: this.state.counter });
			this.setState({ tasks });
			this.setState({ text: '' });
			this.setState({ counter: this.state.counter + 1 });
		} else {
			alert('Please enter a task before pressing Enter');
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
			<div>
				<ul className="task-list">
					{tasks.map(task => (
						<Task text={task.text} key={task.key} id={task.key} />
					))}
				</ul>
				<div className="input-container">
					<input
						type="text"
						name="taskText"
						className="text-area"
						placeholder="Set a new task and press Enter"
						value={this.state.text}
						onChange={this.textChange}
						onKeyPress={this.addTask}
						maxLength="70"
					/>
					<input
						type="button"
						className="button"
						name="removeFinishedTasks"
						value="Remove finished tasks"
						onClick={this.removeTask}
					/>
				</div>
			</div>
		);
	}
}

export default Table;
