// Import express package
const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

// Require the JSON file and assign it to a variable called `termData`

const PORT = 3001;

// Initialize our app variable by setting it to the value of express()
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true} ));
app.use('/api', api);

app.use(express.static('public'));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));

// res.json() allows us to return JSON instead of a buffer, string, or static file
app.get('*', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

// GET request for notes
app.get('/api/notes', (req, res) => {
    // Inform the client
    res.json(`${req.method} request received to get notes`);
  
    // Log our request to the terminal
    console.info(`${req.method} request received to get notes`);
});

app.post('/api/notes', (req, res) => {
    // Inform the client that their POST request was receieved
    res.json(`${req.method} request received to post notes`);
  
    // Log our request to the terminal
    console.info(`${req.method} request received to post reviews`);
} )

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);