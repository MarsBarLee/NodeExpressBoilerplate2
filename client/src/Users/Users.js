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

                    <div className="sign-up-image">
                        <div className="hero-text">
                        <h1>Join us and thousands of other happy trainers.</h1>
                        </div>
                    </div>

                    <div className="current-users">
                        <h2>Here are some current trainers buying at PokeMars-Mart</h2>
                        <div>
                            {this.state.users.map(el => {
                                return (
                                    <div key={el.userid}>{el.username}</div>
                                )
                            })}
                        </div>
                    </div>
                    
                    <div className="grid-users-container">

                    <div>
                        <h3>Sign up today at get 500 reward-points free!</h3>
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
                    </div>

                    <div>
                        <h3>Already signed up? Login below!</h3>
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
                </div> 
                
            )
        } else {
            return (
                <div>"503 Service UnavailableIf you see this message, that our servers are temporarily unavailable. Our apologies, please refresh or come back another time."</div>
            )
        }

    }
}

export default Users;