import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import CreateArea from "./createArea";
import DeleteIcon from '@mui/icons-material/Delete';

// console.log(notes);

function enterNotes(noteItem) {
    return <Note
        key={noteItem.key}
        title={noteItem.title}
        description={noteItem.description}
    />
}



function App() {
    const [notes, setNotes] = React.useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    function Delete(id) {
        setNotes(prevNotes => {

            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            })
        })
    }

    return <div>
        <Header />
        <CreateArea onAdd={addNote} />

        {notes.map((noteItem, index) => {
            return <Note id={index} title={noteItem.title} description={noteItem.description} onDelete={Delete} />
        })}



        <Footer />

    </div>
}

export default App;