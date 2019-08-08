import React, { Component } from 'react';
import axios from 'axios';

class Items extends Component {
    constructor() {
        super();
        this.state ={
            userid: 3,
            items: [],
            cart: [],
            totalPrice: 0,
            numOfItems: 0
        }
    }

// Methods go here
    async componentDidMount() {
        console.log("Items go!")
        try {
            const res = await axios.get('/items');
            this.setState({
                items: res.data
            });
        } catch (error) {
            console.error(error)
        }
    }

    addToCart = (item) => {
        console.log('this is the item added to cart', item)
        this.setState({
            cart: [...this.state.cart, item]
        })
        this.setState({
            totalPrice: this.state.totalPrice +item.price
        })
        this.setState({
            numOfItems: this.state.numOfItems +1
        })
    }

    checkout = async event => {
        const {userid, cart} = this.state;
        const JSONcart = JSON.stringify(cart)
        try {
            await axios.post('/checkout', {userid, JSONcart})
            alert("Checkout successful!");
        } catch(error) {
            console.log(error)
        }
        this.setState({
            cart: [],
            totalPrice: 0,
            numOfItems: 0
        })
    }

    render() {
        console.log('this is the array of al the items',this.state.items)
        console.log('this is the shopping cart', this.state.cart)
        if (this.state.items.length) {
            return(
                <div>
                    Check out our items! Only the best for your pokemon!
                    <div>
                        <h2>Current cart</h2>
                        <h2>Total cost: ₽ {this.state.totalPrice} </h2>
                        <h2>Number of items in cart: {this.state.numOfItems} </h2>
                        <button onClick={this.checkout}>Checkout</button>
                        {this.state.cart.map(el => {
                            return (
                                <li key={el.itemid}>
                                    <img src={el.img} alt={this.itemname} />
                                    <h3>{el.itemname}</h3>
                                    <h4>₽ {el.price}</h4>
                                </li>
                            )
                        })}
                    </div>
                    <ul>
                        {this.state.items.map(el => {
                            return (
                                <li key={el.itemid}>
                                    <img src={el.img} alt={this.itemname} />
                                    <h3>{el.itemname}</h3>
                                    <h4>₽ {el.price}</h4>
                                    <button onClick={() => this.addToCart(el)}>Add to Cart</button>
                                </li>
                            )
                        })}
                    </ul>
                    </div>
            )
            } else {
                return (
                    <div>"There isn't any items to list"</div>
                )
            }
    }
}

export default Items;
