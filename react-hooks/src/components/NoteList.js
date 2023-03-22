import Note from "./Note";
import { useContext } from 'react'
import {NotesContext} from '../contexts/notesContext'

const NoteList = () => {

  const {notes,dispatch} = useContext(NotesContext)

  return  notes.length > 0 ?(
    <div className="note-list">
      <ul className="note-list">
        {notes.map((note) => {
          return <Note key={note.id} note={note} dispatch={dispatch} />;
        })}
      </ul>
    </div>
  ):
  (
    <div className="empty"> You haven't add any notes yet.</div>
  )
  ;
};

export default NoteList;
