import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ConfirmedBooking = () => {
    const [latestBooking, setLatestBooking] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const stored = localStorage.getItem("little-lemon-bookings");
        if (stored) {
            const bookings = JSON.parse(stored);
            const last = bookings[bookings.length - 1];
            setLatestBooking(last);
        }
    }, []);

    return (
        <section className="confirmation-page">
            <h2>Booking Confirmed</h2>
            <p>
                Thank you for reserving a table at Little Lemon. We look forward
                to serving you!
            </p>

            {latestBooking && (
                <div className="booking-details">
                    <h3>Your Reservation Details:</h3>
                    <ul style={{ listStyleType: "none", padding: "1rem" }}>
                        <li>
                            <strong>Name:</strong> {latestBooking.firstName}
                        </li>
                        <li>
                            <strong>Email:</strong> {latestBooking.email}
                        </li>
                        <li>
                            <strong>Date:</strong> {latestBooking.date}
                        </li>
                        <li>
                            <strong>Time:</strong> {latestBooking.time}
                        </li>
                        <li>
                            <strong>Guests:</strong> {latestBooking.guests}
                        </li>
                        <li>
                            <strong>Occasion:</strong> {latestBooking.occasion}
                        </li>
                    </ul>
                </div>
            )}

            <p>
                You will shortly receive an email confirmation of your
                reservation.
            </p>

            <button
                onClick={() => navigate("/")}
                className="btn"
                style={{
                    marginTop: "1rem",
                    marginBottom: "2rem",
                }}
            >
                Continue
            </button>
        </section>
    );
};

export default ConfirmedBooking;
