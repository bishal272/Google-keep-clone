import { useState } from "react";

function CreateArea(props) {
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
        <input
          name="title"
          placeholder="Title"
          onChange={callme}
          value={entry.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={callme}
          value={entry.content}
        />
        <button
          type="submit"
          onClick={(event) => {
            props.addNew(entry);
            setEntry((oldEntry) => {
              return { title: "", content: "" };
            });
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
