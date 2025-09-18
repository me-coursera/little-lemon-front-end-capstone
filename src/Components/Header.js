import React from "react";
import Nav from "./Nav";
import logo from "../images/Logo.svg";

const Header = () => {
    return (
        <div className="content-container">
            <header>
                <div className="nav-header">
                    <img src={logo} alt="logo" className="logo" />
                    <Nav />
                </div>
            </header>
        </div>
    );
};

export default Header;
