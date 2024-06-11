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

    onType ()=> {

    }
    
    render(){
        return (
         <div>
          <Header searchText={this.state.searchText} addNote={this.addNote}/>
           <NotesList notes={this.state.notes} />
         </div>
        )
    }
}


export default App;
