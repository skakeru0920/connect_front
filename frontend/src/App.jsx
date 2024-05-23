import { useState, useEffect } from 'react';

function App() {
	const [list, setList] = useState([]);
	const [newTask, setNewTask] = useState('');

	useEffect(() => {
		fetchTasks();
	}, []);

	const fetchTasks = () => {
		fetch('/api/list')
			.then((response) => response.json())
			.then((data) => setList(data));
	};

	const handleAddTask = () => {
		fetch('/api/list', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ task: newTask }),
		}).then(() => {
			setNewTask('');
			fetchTasks();
		});
	};

	return (
		<>
			<h1>ToDoリスト</h1>
			<div>
				<input
					type="text"
					value={newTask}
					onChange={(e) => setNewTask(e.target.value)}
				/>
				<button onClick={handleAddTask}>タスクを追加する</button>
			</div>
			<ul>
				{list.map((task, i) => (
					<li key={i}>{task}</li>
				))}
			</ul>
		</>
	);
}

export default App;
