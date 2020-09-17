import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes,setNotes] = useState([]);

  function addNote(note){
    setNotes((prevVal)=>{
      return([...prevVal,note]);
    })
  }

  function deleteNote(index){
    setNotes((prevVal)=>{
      return prevVal.filter(function(note,i){
        return (i!==index);
      });
    })
    }
  
  return (
    <div>
      <Header />
      <CreateArea add={addNote}/>
      {notes.map(function(note,index){
        return (<Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote} />);
      })}
      <Footer />
    </div>
  );
}

export default App;
