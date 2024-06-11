import React from "react";


const Note = props => (
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
        <span className="note__delete">X</span>
      </li>
)

export default Note;