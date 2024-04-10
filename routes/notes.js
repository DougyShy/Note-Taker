const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the feedback
notes.get('/', (req, res) => {

    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
    
});

notes.post('/', (req, res) => {

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

  // Well I got this close to the bonus but time ran out  
  console.log("inside notes.DELETE");
  console.log(req.params.id + "HERE");

})

module.exports = notes;