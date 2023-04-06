import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [entry, setEntry] = useState({
    title: "",
    content: "",
  });
  const [isClicked, setIsClicked] = useState(false);

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

  const handleFocus = () => {
    setIsClicked(true);
  };

  return (
    <div>
      <form className="create-note">
      {isClicked &&<input
          name="title"
          placeholder="Title"
          onChange={callme}
          value={entry.title}
          
        />}
         <textarea
          name="content"
          placeholder="Take a note..."
          rows={isClicked?3:1}
          onChange={callme}
          value={entry.content}
          onFocus={() => {
            handleFocus();
          }}
        /> 
        
        <Zoom in={isClicked && true}>
          <Fab
            type="submit"
            onClick={(event) => {
              props.addNew(entry);
              setEntry((oldEntry) => {
                return { title: "", content: "" };
              });
              event.preventDefault();
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
