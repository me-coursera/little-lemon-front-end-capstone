import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="nav">
                <button
                    className="hamburger"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✖" : "☰"}
                </button>

                <ul className={`nav-list ${isOpen ? "open" : ""}`}>
                    <li onClick={() => setIsOpen(!isOpen)}>
                        <Link to="/">Home</Link>
                    </li>
                    <li onClick={() => setIsOpen(!isOpen)}>
                        <a href="/about">About</a>
                    </li>
                    <li onClick={() => setIsOpen(!isOpen)}>
                        <a href="/menu">Menu</a>
                    </li>
                    <li onClick={() => setIsOpen(!isOpen)}>
                        <a href="/reservations">Reservations</a>
                    </li>
                    <li onClick={() => setIsOpen(!isOpen)}>
                        <a href="/order">Order Online</a>
                    </li>
                    <li onClick={() => setIsOpen(!isOpen)}>
                        <a href="/login">Login</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Nav;
