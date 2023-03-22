import {useContext, useState} from 'react'
import {NotesContext} from '../contexts/notesContext'

const AddNote = () => {

    const {dispatch,notes} = useContext(NotesContext)
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch({
            type:'ADD_NOTE',
            id:notes.length+1,
            title:title, 
            description:description
          })
        setTitle('')
        setDescription('')
    }

  
    return(

        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='title'/>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='description'/>
            <button type='submit'>Add Note</button>
        </form>

    )

}

export default AddNote