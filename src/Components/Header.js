import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import logo from "../images/Logo.svg";

const Header = () => {
    return (
        <div className="content-container">
            <header>
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="logo" className="logo" />
                    </Link>
                    <Nav />
                </div>
            </header>
        </div>
    );
};

export default Header;
