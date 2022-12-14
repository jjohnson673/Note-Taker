const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

//Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));



// const util = require('util');
// const fs = require('fs');

// //Generating unique IDs
// const uuidv1 = require('uuid');

// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);

// class Store {
//     read() {
//         return readFileAsync('./db/db.json', 'utf8');
//     }

//     write(note) {
//         return writeFileAsync('./db/db.json', JSON.stringify(note));
//     }

//     getNotes() {
//         return this.read().then((notes) => {
//             let parsedNotes;

//             //send back a new empty array if the note isn't already an array or can't be turned into one
//             try {
//                 parsedNotes = [].concat(JSON.parse(notes));
//             } catch (err) {
//                 parsedNotes = [];
//             }

//             return parsedNotes;
//         });
//     }

//     addNote(note) {
//         const { title, text } = note;
        
//         if (!title || !text) {
//             throw new Error("Note 'title' and 'text' cannot be blank");
//         }

//         //using the uuid package, add a unique ID to the note
//         const newNote = { title, text, id: uuidv1() };

//         //Get all the notes, add the new note, write all the updated notes, return the newNote
//         return this.getNotes()
//             .then((notes) => [...notes, newNote])
//             .then((updatedNotes) => this.write(updatedNotes))
//             .then(() => newNote);
//     }

//     removeNote(id) {
//         //Get all notes, remove the note with the given ID, write the filtered notes
//         return this.getNotes()
//             .then((notes) => notes.filter((note) => note.id !== id))
//             .then((filteredNotes) => this.write(filteredNotes));
//     }
// }

// module.exports = new Store();