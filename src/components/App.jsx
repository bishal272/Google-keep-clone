import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [entryList, setEntryList] = useState([]);

  const addNewNote = (newEntry) => {
    setEntryList((oldEntry) => {
      return [...oldEntry, newEntry];
    });
  };

  const deleteEntry = (id) => {
    setEntryList((oldEntryList) => {
      return oldEntryList.filter((currentValue, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea addNew={addNewNote} />
      {entryList.map((e,index) => {
        return (
          <Note
            key={index}
            id={index}
            deleteEntry={deleteEntry}
            title={e.title}
            content={e.content}
          />
        );
      })}

      {/* <button onClick={() => console.log(entryList)}>click</button> */}
      <Footer />
    </div>
  );
}

export default App;
