import React from "react";
import Nav from "./Nav";
import Logo from "../images/Logo.svg";

const Header = () => {
    return (
        <div className="content-container">
            <header className="header">
                <div className="nav-header">
                    <img src={Logo} alt="logo" />
                    <Nav />
                </div>
            </header>
        </div>
    );
};

export default Header;
