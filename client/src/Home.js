import React, { Component } from "react";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            // does this even need a state?
        }
    }
    render() {
        console.log("This is Home.js")
        return(
            <div>
                <h1>Welcome to the PokeMart!</h1>
                {/* <RandomItem /> */}
            </div>
        )
    }
}

export default Home;