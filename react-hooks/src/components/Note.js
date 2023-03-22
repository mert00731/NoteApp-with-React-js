import { useContext } from 'react'
import {NotesContext} from '../contexts/notesContext'

const Note = ({note}) => {

  const {dispatch} = useContext(NotesContext)


  const removeNote = (id) => {
    
    dispatch({
      type:'REMOVE_NOTE',
      id
    })

    //setNotes(notes.filter((note) => note.id !== id))
  }

    return(
        <div>
        <li onClick={() => removeNote(note.id)} key={note.id}>
            <h1 className="title">{note.title}</h1>
            <p>{note.description}</p>
            
        </li>
        </div>
    )
}

export default Note