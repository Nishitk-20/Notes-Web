import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import {note} from "../note"

function App(){
    return (
      <div>
          <Header />

          {note.map(function (noteItem){
            return (
              <Note
                key = {noteItem}
                title = {noteItem.title}
                content = {noteItem.content}
              />
            );

          })}

          <Footer />

      </div>
    );
}    

export default App;
