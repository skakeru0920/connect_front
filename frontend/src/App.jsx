import { useState, useEffect } from 'react';

function App() {
	const [list, setList] = useState([]);

	useEffect(() => {
		fetch('/api/list')
			.then((response) => response.json())
			.then((data) => setList(data));
	}, []);

	return (
		<>
			<h1>ToDoリスト</h1>
			<input />
			<ul>
				{list.map((task, i) => (
					<li key={i}>{task}</li>
				))}
			</ul>
		</>
	);
}

export default App;
