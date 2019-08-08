import React from 'react'
import { Link } from 'react-router-dom'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar'
// import Button from '@material-ui/core/Button';
// import RaisedButton from 'material-ui/RaisedButton';

// NavBar isn't going to change, doesn't need to be stateful, can be functional... does it even need props?
function NavBar () {
    return(
        <div>
            <nav className="navbar" >
                <ul className="navbar-links">
                    <Link to='/home'>
                        <li>PokeMars-Mart</li>
                    </Link>
                    <Link to='/about'>
                        <li>About</li>
                    </Link>
                    <Link to='/items'>
                        <li>Shop</li>
                    </Link>
                    <Link to='/users'>
                        <li>Sign Up</li>
                    </Link>
                    <Link to='/users'>
                        <li>Log In</li>
                    </Link>
                    <Link to='/contact'>
                        <li>Contact</li>
                    </Link>
                </ul>
            </nav>
        </div>
    ) 
}

export default NavBar;