const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

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
app.listen(3000, () => {
	console.log('Server running on http://localhost:3000');
});
