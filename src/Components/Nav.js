import React from "react";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="nav">
                <button
                    className="hamburger"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>

                <ul className={`nav-list ${isOpen ? "open" : ""}`}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/menu">Menu</a>
                    </li>
                    <li>
                        <a href="/reservations">Reservations</a>
                    </li>
                    <li>
                        <a href="/order">Order Online</a>
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Nav;
