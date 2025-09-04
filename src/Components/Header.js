import React from "react";
import Nav from "./Nav";
import Logo from "../images/Logo.svg";

const Header = () => {
    return (
        <>
            <img src={Logo} alt="logo" />
            <Nav />
        </>
    );
};

export default Header;
