import { useState } from "react";

function CreateArea() {
  const [entry, setEntry] = useState({
    title: "",
    content: "",
  });

  const callme = (event) => {
    
    const { name, value } = event.target;
    setEntry((oldEntry) => {
      if (name === "title") {
        return {
          ...oldEntry,
          title: value,
        };
      } else if (name === "content") {
        return {
          ...oldEntry,
          content: value,
        };
      }
    });
    
  };

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={callme} />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={callme}
        />
        <button
        type="submit"
          onClick={(event) => {
            console.log(entry);
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
