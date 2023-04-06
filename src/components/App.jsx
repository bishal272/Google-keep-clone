// import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

// const [entry, setEntry] = useState([{}]);

// const addNewNote = () =>{
//   setEntry((oldEntry)=>{
//     return [...oldEntry, ];
//   })
// }

function App() {
  return (
    <div>
      <Header />
      <CreateArea />
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
