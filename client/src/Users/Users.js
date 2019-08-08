import React, { Component } from 'react';
import axios from 'axios';

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
                        <input
                        name="username"
                        placeholder="Enter username here" 
                        onChange={this.handleChange}
                        />
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
                <div>"There isn't any users to list"</div>
            )
        }

    }
}

export default Users;