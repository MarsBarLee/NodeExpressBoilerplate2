// import React, { Component } from 'react';
// import axios from 'axios';

// class Items extends Component {
//     constructor() {
//         super();
//         this.state ={
//             items: []
//         }
//     }

// Methods go here
//     async componentDidMount() {
//         try {
//             const res = await axios.get('/items');
//             this.setState({
//                 users: res.data,
//             });
//         } catch (error) {
//             console.error(error)
//         }
//     }
//     render() {
//         if (this.state.users.length) {
//             return(
//                 <div>
//                     Check our out items! Only the best for your pokemon!
//                     <ul>
//                         {this.state.items.map(el => {
//                             return (
//                                 <li key={el.itemid}>{el.itemname}</li>
//                             )
//                         })}
//                     </ul>
//             )
//         } else {
//             return (
//                 <div>"There isn't any items to list"</div>
//             )
//         }

//     }
// }

// export default Items;
