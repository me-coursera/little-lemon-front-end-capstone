import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav>
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
                        <a href="/placeholder">About</a>
                    </li>
                    <li onClick={() => setIsOpen(!isOpen)}>
                        <a href="/placeholder">Menu</a>
                    </li>
                    <li onClick={() => setIsOpen(!isOpen)}>
                        <Link to="/reservations">Reservations</Link>
                    </li>
                    <li onClick={() => setIsOpen(!isOpen)}>
                        <a href="/placeholder">Order Online</a>
                    </li>
                    <li onClick={() => setIsOpen(!isOpen)}>
                        <a href="/placeholder">Login</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Nav;
