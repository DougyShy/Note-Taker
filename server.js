// Import express package
const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

// Require the JSON file and assign it to a variable called `termData`

const PORT = process.env.PORT || 3001;

// Initialize our app variable by setting it to the value of express()
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true} ));
app.use('/api', api);

app.use(express.static('public'));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);