import { useContext } from 'react'
import {NotesContext} from '../contexts/notesContext'


const Navbar = () => {

    const {notes} = useContext(NotesContext)

    return(
        <div className="navbar">
            <h1>NoteApp</h1>
            <p> There is {notes.length} note</p>
        </div>
    )
}

export default Navbar