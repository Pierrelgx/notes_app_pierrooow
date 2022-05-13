import { useState } from 'react';
import uuid from 'react-uuid';
import './App.css';
import Sidebar from './Sidebar';
import Main from './Main';

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const onAddNote = () => {
    console.log("add");
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
  };

  const onUpdateNote = (updateNote) => {
    const udpateNotesArray = notes.map((note) => {
      if(note.id === activeNote) {
        return updateNote;
      }

      return note;

    });

    setNotes(udpateNotesArray);

  }


  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
    
  };


  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  }

  return (
    <div className="App">
      
      <Sidebar 
      notes={notes} 
      onAddNote={onAddNote} 
      onDeleteNote={onDeleteNote}  
      activeNote={activeNote} 
      setActiveNote={setActiveNote}/>

      <Main 
      activeNote={activeNote} 
      onUpdateNote={onUpdateNote} />
    
    </div>
  );
}

export default App;
