import React from "react";

const Footer = () => {
    return (
        <div className="content-container">
            <footer>
                {/* <img src="" alt="" /> */}
                <nav aria-label="Doormat Navigation">
                    <h2>Doormat Navigation</h2>
                    <ul>
                        <li>
                            <a href="/">Home</a>
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
