import React, { Component } from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Users extends Component {
    constructor() {
        super();
        this.state ={
            users: [],
            username: "",
            password: ""
        }
    }

    // Methods go here
    async componentDidMount() {
        try {
            const res = await axios.get('/userbase');
            this.setState({
                users: res.data,
            });
        } catch (error) {
            console.error(error)
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    addUser = async event => {
        event.preventDefault();
        const {username, password} = this.state;
        try {
            await axios.post('/signup', {username, password})
            alert("Signup successful!");
            const res = await axios.get('/userbase'); // updated userbase
            this.setState({
                users: res.data
            })
        } catch(error) {
            console.log(error)
        }
    }

    login = async event => {
        event.preventDefault();
        const {username, password} = this.state;
        try {
            await axios.get('/login', {username, password})
            console.log('Login attempted on front-end')
        } catch(error) {
            console.log(error)
        }
    }

    render() {
        if (this.state.users.length) {
            return(
                <div>
                    <div className="hero-image">
                        <div className="hero-text">
                        <h1>Join us today! Here are some current trainers buying at PokeMars-Mart!</h1>
                    </div>

                    </div>
                    <ul>
                        {this.state.users.map(el => {
                            return (
                                <li key={el.userid}>{el.username}</li>
                            )
                        })}
                    </ul>
                    Let's begin!
                    <form>
                        <input
                        name="username"
                        placeholder="Enter username here" 
                        onChange={this.handleChange}
                        />
                        <br></br>
                        <input
                        name="password"
                        placeholder="Enter password here"
                        onChange={this.handleChange}
                        />
                    </form>
                    <button type='submit' onClick={this.addUser}>Submit</button>
                    <br></br>
                    <br></br>
                    <div>
                        Already signed up? Login below!
                        <form>
                            <input
                            name="username"
                            placeholder="Enter username here" 
                            onChange={this.handleChange}
                            />
                            <br></br>
                            <input
                            name="password"
                            placeholder="Enter password here"
                            onChange={this.handleChange}
                            />
                        </form>
                        <button type='submit' onClick={this.login}>Submit</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div>"503 Service Unavailable"</div>
                <div>"If you see this message, that our servers are temporarily unavailable. Our apologies, please refresh or come back another time."</div>
            )
        }

    }
}

export default Users;