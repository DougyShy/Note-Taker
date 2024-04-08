const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the feedback
notes.get('/', (req, res) => {

    console.info(`${req.method} request received for notes`);

    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    console.log(req.body);
    console.log("INSIDE OF notes.js POST")

    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;

    console.log(title, text);
  
    if (req.body) {
      const newNote = {
        title, text,
        id: uuid(),
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`Note added successfully`);
    } else {
      res.error('Error in adding note');
    }
  });

notes.delete('/:id', (req, res) => {
  
  console.log("inside notes.DELETE");
  console.log(req.params.id + "HERE");

})

module.exports = notes;