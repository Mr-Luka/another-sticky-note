import React, {Component} from "react";
import Header from "./Header.js"
import NotesList from "./NotesList.js";

class App extends Component {
    state = {
        notes: [{
         id: Date.now(),
         title: "",
         description: "",
         doesMatchSearch: true,
         }],
    searchText: "Search for me"
    }

    addNote = () => {
        const newNote = {
         id: Date.now(),
         title: "",
         description: "",
         doesMatchSearch: true,
        };
        const newNotes = [newNote, ...this.state.notes];
        this.setState({notes: newNotes});
    }

    onType = (editMeId, updatedKey, updatedValue)=> {
        const updatedNotes = this.state.notes.map(note=>{
            if (note.id !== editMeId){
                return note;
            } else {
                if(updatedKey === "title"){
                    note.title = updatedValue;
                    return note;
                } else {
                    note.description = updatedValue;
                    return note;
                }
            }
        })
        this.setState({notes: updatedNotes});
    };

    onSearch = (text) => {
        const newSearchText = text.toLowerCase();
        const updatedNotes = this.state.notes.map(note=>{
            if(!newSearchText){
                note.doesMatchSearch = true;
                return note;
            } else {
                const title = note.title.toLocaleLowerCase();
                const description = note.description.toLowerCase();
                const titleMatch = title.includes(newSearchText);
                const descriptionMatch = description.includes(newSearchText);
                const doesMatch = titleMatch || descriptionMatch;
                note.doesMatchSearch = hasMatch;
                return note;
            }
        })
        this.setState({notes:updatedNotes, searchText: newSearchText})
    }

    render(){
        return (
         <div>
          <Header searchText={this.state.searchText} addNote={this.addNote} />
           <NotesList notes={this.state.notes} onType={this.onType}/>
         </div>
        )
    }
}


export default App;
