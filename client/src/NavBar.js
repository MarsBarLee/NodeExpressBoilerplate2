import React from 'react'
import { Link } from 'react-router-dom'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar'
// import Button from '@material-ui/core/Button';
// import RaisedButton from 'material-ui/RaisedButton';
import cart from "./img/cart.svg"

// NavBar isn't going to change, doesn't need to be stateful, can be functional... does it even need props?
function NavBar () {
    return(
        <div>
            <nav id="navbar" >
                <ul className="navbar-links" >
                    <Link to='/home' id="title" style={{ textDecoration: 'none', color: 'black' }}>
                        <li>PokeMars-Mart</li>
                    </Link>
                    <Link to='/items' style={{ textDecoration: 'none', color: 'black' }}>
                        <li>Shop</li>
                    </Link>
                    <Link to='/users' style={{ textDecoration: 'none', color: 'black' }}>
                        <li>Sign Up</li>
                    </Link>
                    <Link to='/users' style={{ textDecoration: 'none', color: 'black' }}>
                        <li>Log In</li>
                    </Link>
                    <Link to='/items' style={{ textDecoration: 'none', color: 'black' }}>
                        <li>Cart (0) <span class="fas fa-shopping-cart"></span></li>
                    </Link>
                </ul>
            </nav>
        </div>
    ) 
}

export default NavBar;