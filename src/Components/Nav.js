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
                        <Link to="/" aria-label="Go to Home page">
                            Home
                        </Link>
                    </li>
                    <li onClick={() => setIsOpen(!isOpen)}>
                        <Link to="/placeholder">About</Link>
                    </li>
                    <li onClick={() => setIsOpen(!isOpen)}>
                        <Link to="/placeholder">Menu</Link>
                    </li>
                    <li onClick={() => setIsOpen(!isOpen)}>
                        <Link
                            to="/reservations"
                            aria-label="Reserve a table (opens reservation form)"
                        >
                            Reservations
                        </Link>
                    </li>
                    <li onClick={() => setIsOpen(!isOpen)}>
                        <Link to="/placeholder">Order Online</Link>
                    </li>
                    <li onClick={() => setIsOpen(!isOpen)}>
                        <Link to="/placeholder">Login</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Nav;
