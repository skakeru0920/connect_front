const express = require('express');
const app = express();

const list = [
	'翻訳アプリをダウンロードする',
	'戸締りをする',
	'猫を抱きしめる',
	'荷造りをする',
	' 航空券を買う',
	'もう一度猫を抱きしめる',
];

app.get('/api/list', (req, res) => {
	res.json(list);
});
app.listen(3000, () => {
	console.log('Server running on http://localhost:3000');
});
