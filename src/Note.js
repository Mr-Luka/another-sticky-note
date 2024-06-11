import React from "react";


const Note = props => { 
    const updateTitle = e =>{
        const updatedTitle = e.target.value;
        const editMeId = props.note.id;
        props.onType(editMeId, "title", updatedTitle)
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
             />
        <span className="note__delete">X</span>
      </li>
)
}

export default Note;