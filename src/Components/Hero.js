import React from "react";
import heroImg from "../images/restauranfood.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <>
            {/* <div className="section-wide"> */}
            <section id="hero">
                <div className="container">
                    <div className="information">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>
                            We are a family owned Mediterranean restaurant,
                            focused on traditional recipes served with a modern
                            twist.
                        </p>
                        <Link className="btn" to="/reservations">
                            Reserve a table
                        </Link>
                    </div>
                    <img src={heroImg} alt="Hero" />
                </div>
            </section>
            {/* </div> */}
        </>
    );
};

export default Hero;
