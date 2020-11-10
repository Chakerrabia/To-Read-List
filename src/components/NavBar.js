import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';
const NavBar = (props) => {
    const {books} = useContext(BookContext)
    return ( 
        <div className="navbar">
            <h1> Rabia's reading list</h1>
            <p>Currently You have {books.length} Books to cycle through...</p>
        </div>
     );
}
 
export default NavBar;