import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return <>
            <div className="navbar-container">
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
                </>
    }
} 