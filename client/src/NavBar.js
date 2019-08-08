import React from 'react'
import { Link } from 'react-router-dom'

// NavBar isn't going to change, doesn't need to be stateful, can be functional... does it even need props?
function NavBar () {
    return(
        <ul>
            <Link to='/home'>
                <li>Logo</li>
            </Link>
            <Link to='/users'>
                <li>Sign Up or Log In</li>
            </Link>
            <Link to='/items'>
                <li>Shopping</li>
            </Link>
        </ul>
    ) 
}

export default NavBar;