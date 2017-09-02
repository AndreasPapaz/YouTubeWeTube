const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const app = express();

//body parser boiler plate
app.use(express.static('public'));
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


app.listen(PORT, function() {
	console.log('Listening on port : ' + PORT);
});