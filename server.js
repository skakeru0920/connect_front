const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const list = [
	'翻訳アプリをダウンロードする',
	'戸締りをする',
	'猫を抱きしめる',
	'荷造りをする',
	' 航空券を買う',
	'もう一度猫を抱きしめる',
];

app.use('/', express.static(__dirname + '/frontend/dist'));

app.get('/api/list', (req, res) => {
	res.json(list);
});

app.post('/api/list', (req, res) => {
	const { task } = req.body;
	list.push(task);
	console.log('list update', list);
	res.status(201);
	res.end();
});

app.listen(3000, () => {
	console.log('Server running on http://localhost:3000');
});
