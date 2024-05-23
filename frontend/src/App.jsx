import { useState } from 'react';

function App() {
	const [list, setList] = useState([
		'翻訳アプリをダウンロードする',
		'戸締りをする',
		'猫を抱きしめる',
		'荷造りをする',
		'航空券を買う',
		'もう一度猫を抱きしめる',
	]);

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
