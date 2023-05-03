const express = require('express');
const cors = require('cors');
const data = require('./data');

const app = express();
const port = 3035;

app.use(
	cors({
		origin: 'http://localhost:3030',
	})
);

app.get('/', (req, res) => {
	res.json(data);
});

app.listen(port, () => {
	console.log(`HIP HO! Server running on http://localhost:${port}`);
});
