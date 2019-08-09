import React, { Component } from "react";
import { Link } from 'react-router-dom'
import logo2 from "./img/logo2.png";
import app from "./img/iphonebase4.png";
import facebook from "./img/facebook2.png"
import instagram from "./img/insta2.png"

class Home extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return(
            <div>
                <div className="hero-image">
                    <div className="hero-text">
                        <img src={logo2} width="100ems" />
                        <h1>ready for any adventure</h1>
                        <Link to='/items' style={{ textDecoration: 'none', color: 'black' }}>
                            <h3 style={{ textDecoration: 'none', color: 'white' }} className="btn">SHOP</h3>
                        </Link>
                    </div>
                </div>
                
                <div className="page-margins">

                    <div className="page-section">
                        <div className="grid-home-container">
                            <div className="grid-home-img">
                            </div>
                            <div className="grid-home-text">
                                    <br></br>
                                    <br></br>
                                <h3>Ever since Mars Lee founded this company in 1997, we have had one goal- to inspire trainers everywere to begin their journey with their best friends: Pokemon.
                                    <br></br>
                                    <br></br>
                                    Whether it's a stroll into Viridian Forest or a marathon to the Indigo League, we got your back.</h3>
                            </div>
                        </div>
                    </div>

                    <div className="page-section">
                        <div  className="promotion-image">
                            <div className="promotion-text">
                                <h1>surf's up at alola!</h1>
                                <h2>get vacation ready with our summer collection</h2>
                            </div>
                        </div>
                    </div>

                    <div className="page-section">
                        <div  className="bike-image">
                            <div className="bike-text">
                                <h1>roam free</h1>
                                <h2>across streets, forests and mountains, we have a bikes for every terrian.</h2>
                            </div>
                        </div>
                    </div>

                    <div className="page-section">
                        <div  className="fishing-image">
                            <div className="fishing-text">
                                <h1>let nature reel you in</h1>
                                <h2>only the best fishing rods- so you don't get another Magikarp.</h2>
                            </div>
                        </div>
                    </div>

                    <div className="page-section">
                        <div className="grid-mountain-container">
                            <div>
                            <br></br>
                                    <br></br>
                                    <h3>
                                    Coming soon in the app store near you
                                    <br></br>
                                    <br></br>
                                    No matter where you go, re-stocking is just a tap away.
                                    <br></br>
                                    <br></br>
                                    Delivered to your front door- or tent.
                                    </h3>
                            </div>
                            <div className="grid-mountain-img">
                                {/* <img src={app} className="app-prototype"/> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer">
                        <div className="footer-social-media">
                            <img src={facebook} width="50ems" />
                        </div>
                        <div className="footer-social-media">
                            <img src={instagram} width="50ems" />
                        </div>

                        <div className="footer-text"> 
                            <h4>Questions? Contact at at pokemars@mart.com or 855-996-3746</h4>
                            <div className="footer-links">
                                <h4>© 1997-2019 Mars Outdoor Group. All Rights Reserved</h4>
                            </div>
                        </div>
                    </div>

            </div>
        )
    }
}

export default Home;