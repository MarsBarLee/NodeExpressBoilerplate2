import React, { Component } from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Users2 extends Component {
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
                <MuiThemeProvider> {/* div */}
                    Join us today! Here are some current trainers buying at PokeMars-Mart!
                    <ul>
                        {this.state.users.map(el => {
                            return (
                                <li key={el.userid}>{el.username}</li>
                            )
                        })}
                    </ul>
                    Let's begin!
                    <form>
                        <TextField
                        name="username"
                        floatingLabelText="Enter username here" 
                        onChange={this.handleChange}
                        />
                        <br></br>
                        <TextField
                        name="password"
                        floatingLabelText="Enter password here" 
                        onChange={this.handleChange}
                        />
                    </form>
                    <RaisedButton label="Sign up"
                    type='submit'
                    primary={true}
                    onClick={this.addUser}
                    styles={styles.button}
                    />
                    <br></br>
                    <br></br>
                    <div>
                        Already signed up? Login below!
                        <form>
                            <TextField
                            name="username"
                            floatingLabelText="Enter username here" 
                            onChange={this.handleChange}
                            />
                            <br></br>
                            <TextField
                            name="password"
                            floatingLabelText="Enter password here"
                            onChange={this.handleChange}
                            />
                        </form>
                        <RaisedButton label="Login"
                        type='submit'
                        primary={true}
                        onClick={this.login}
                        styles={styles.button}
                        />
                    </div>
                </MuiThemeProvider>
            )
        } else {
            return (
                <div>"There isn't any users to list"</div>
            )
        }

    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default Users2;