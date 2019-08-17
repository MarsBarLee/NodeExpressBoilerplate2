import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom'
import Home from './Home.js'
import Users from './Users/Users.js'
import Users2 from './Users/Users2.js'
import Items from './Items/Items.js' // doesn't need { Items } as default export

class Routes extends Component {
    constructor() {
    super()
    this.state = {}
    }

    render(){
        console.log("This is Routes.js")
    return (
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/items" component={Items} />
            <Route path='/'component = {Home} />
        </Switch>
        )
    }
}

export default Routes;
