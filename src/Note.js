import React from "react";

/* This presentational component renders a single
list item element with two text input fields,
one for the note's title and one for the note's
description. When the user types in these fields,
functions that are passed to this component
as props are used to update the state of the
corresponding note object in the state of the
App component  */
const Note = props => { 
    const updateTitle = e =>{
        const updatedTitle = e.target.value;
        const editMeId = props.note.id;
        props.onType(editMeId, "title", updatedTitle)
    } 
    const updatedDescription = e =>{
        const updatedTitle = e.target.value;
        const editMeId = props.note.id;
        props.onType(editMeId, "description", updatedTitle);
    }

    const clickDelete = () => {
        props.removeNote(props.note.id)
    }
    return(
          <li className="note">
        <input 
            className="note__title" 
            type="text" placeholder="Title"
            value={props.note.title}
            onChange={updateTitle}
             />
        <textarea 
            className="note__description" 
            placeholder="Description..."
            value={props.note.description}
            onChange={updatedDescription} />
        <span onClick={clickDelete} className="note__delete">X</span>
      </li>
)
}

export default Note;