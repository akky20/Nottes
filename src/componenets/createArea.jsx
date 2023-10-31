import React from "react";
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {

  const [note, setNote] = React.useState({
    title: "",
    description: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;


    setNote(prevNote =>{
      return {
        ...prevNote,
        [name]: value
      };
    })
  }


  function submitButton(event){
    props.onAdd(note);
    setNote({
      title: "",
      description: ""
    })  
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
        <textarea name="description" onChange={handleChange} value={note.description} placeholder="Take a note..." rows="3" />
        <button onClick={submitButton}> <AddIcon/>  </button>
      </form>
      </div>
    )  ;
}

        export default CreateArea;
