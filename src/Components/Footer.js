import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import logo_mono from "../images/Logo_Mono.png";

const Footer = () => {
    return (
        <div className="section-wide">
            <div className="content-container">
                <footer>
                    <div className="nav-footer">
                        <img
                            src={logo_mono}
                            alt="logo-mono"
                            className="logo_mono"
                        />
                        <div className="links">
                            <nav aria-label="Doormat Navigation">
                                <h3>Navigation</h3>
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
                                        <Link to="/reservations">
                                            Reservations
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/placeholder">
                                            Order Online
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/placeholder">Login</Link>
                                    </li>
                                </ul>
                            </nav>
                            <nav aria-label="Contact">
                                <h3>Contact</h3>
                                <ul>
                                    <li>1 Food Ave, Chicago, IL</li>
                                    <li>+1 (012) 555-1234</li>
                                    <li>
                                        <a href="mailto:someone@example.com">
                                            someone@example.com
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <nav aria-label="Social Media Links">
                                <h3>Social Media</h3>
                                <div className="socials">
                                    <FaFacebook size={18} />
                                    <FaTwitter size={18} />
                                    <FaYoutube size={18} />
                                    <FaLinkedin size={18} />
                                </div>
                            </nav>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
