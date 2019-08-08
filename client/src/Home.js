import React, { Component } from "react";

class Home extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return(
            <div className="hero-image">
                <div className="hero-text">
                    <h1>Welcome to the PokeMart!</h1>
                </div>
                <div>
                    About
                </div>
            </div>
        )
    }
}

export default Home;