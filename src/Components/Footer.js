import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="content-container">
            <footer>
                {/* <img src="" alt="" /> */}
                <nav aria-label="Doormat Navigation">
                    <h2>Doormat Navigation</h2>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/placeholder">About</Link>
                        </li>
                        <li>
                            <Link to="/placeholder">Menu</Link>
                        </li>
                        <li>
                            <Link to="/reservations">Reservations</Link>
                        </li>
                        <li>
                            <Link to="/placeholder">Order Online</Link>
                        </li>
                        <li>
                            <Link to="/placeholder">Login</Link>
                        </li>
                    </ul>
                </nav>
                <nav aria-label="Contact">
                    <h2>Contact</h2>
                    <ul>
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>
                            <a href="mailto:someone@example.com">Email</a>
                        </li>
                    </ul>
                </nav>
                <nav aria-label="Social Media Links">
                    <h2>Social Media Links</h2>
                    <ul>
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>
                            <a href="mailto:someone@example.com">Email</a>
                        </li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
