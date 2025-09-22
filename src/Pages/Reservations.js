import React from "react";

const Reservations = () => {
    return (
        <div className="section-wide">
            <div className="reservation-back">
                <div className="content-container">
                    <section id="reservations">
                        <h2 className="storyHeading">Reservations</h2>
                        <div
                            className="reservation-container"
                            aria-label="Reservations"
                        >
                            <div className="reservation-info">
                                <p>
                                    Reserve your table here at Little Lemon and
                                    come enjoy an exclusive meal, masterfully
                                    prepared, specially for you.
                                </p>
                            </div>
                            <div className="reservation-form">
                                <h3>Reserve a Table</h3>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Reservations;
