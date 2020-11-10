import React, {useContext, useState} from 'react';
import{ BookContext } from '../contexts/BookContext'
const BookForm = () => {
    const {dispatch} = useContext(BookContext)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState()

    const handleSubmit = (e) =>{
        //e.preventDefaut();
        dispatch({type: 'ADD_BOOK', book:{
            title, author
        } })
        setAuthor('')
        setTitle('')
    }
    return ( 
        <form>
            <input type='text' placeholder= 'Title' value={title} 
            onChange={(e)=> setTitle(e.target.value)} required />
            <input type='text' placeholder= 'Author' value={author} 
            onChange={(e)=> setAuthor(e.target.value)} required />
            <input type='submit' value="Add Book" onClick ={handleSubmit}/>
        </form>
     );
}
 
export default BookForm;