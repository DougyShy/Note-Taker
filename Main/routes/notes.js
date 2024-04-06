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
  
    const { title, text } = req.body;

    console.log(title, text);
  
    if (req.body) {
      const newNote = {
        title, text,
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`Note added successfully`);
    } else {
      res.error('Error in adding note');
    }
  });

/*  
// POST request to add a new note
notes.post('/', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to add a note`);

    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;
    console.log(req.body);

    // If all the required properties are present
    if (title && text) {
      // Variable for the object we will save
      const newNote = {
        title,
        text,
        //review_id: uuid(),
      };
    }
    
    // Check if there is anything in the response body
    if (req.body && req.body.title) {
      response = {
        status: 'success',
        data: req.body,
      };
      readAndAppend(newNote, './db/tips.json');
        res.json(`Tip added successfully`);
    } else {
        res.error('Error in adding tip');
    }
});
*/

module.exports = notes;