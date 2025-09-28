import { fetchAPI } from "../api.js";
import React, { useReducer } from "react";
import BookingForm from "../Components/BookingForm";
import restaurantImg from "../images/restaurant.jpg";

const initializeTimes = (...args) => {
    const fetchFn = typeof args[0] === "function" ? args[0] : fetchAPI;

    const today = new Date();
    const allTimes = fetchFn(today) || [];

    const stored = localStorage.getItem("little-lemon-bookings");
    let bookings = [];

    try {
        const parsed = JSON.parse(stored);
        bookings = Array.isArray(parsed) ? parsed : [];
    } catch {
        bookings = [];
    }

    const todayStr = today.toISOString().split("T")[0];
    const bookedTimes = bookings
        .filter((b) => b.date === todayStr)
        .map((b) => b.time);

    return allTimes.filter((time) => !bookedTimes.includes(time));
};

const updateTimes = (state, action, maybeFetchFn) => {
    const fetchFn =
        typeof maybeFetchFn === "function" ? maybeFetchFn : fetchAPI;

    const selectedDate = new Date(action.date);
    const allTimes = fetchFn(selectedDate) || [];

    const stored = localStorage.getItem("little-lemon-bookings");
    let bookings = [];

    try {
        const parsed = JSON.parse(stored);
        bookings = Array.isArray(parsed) ? parsed : [];
    } catch {
        bookings = [];
    }

    const selectedDateStr = selectedDate.toISOString().split("T")[0];
    const bookedTimes = bookings
        .filter((b) => b.date === selectedDateStr)
        .map((b) => b.time);

    return allTimes.filter((time) => !bookedTimes.includes(time));
};

const Reservations = ({ submitForm }) => {
    const [availableTimes, dispatch] = useReducer(
        updateTimes,
        [],
        initializeTimes
    );

    return (
        <div className="section-wide">
            <div className="reservation-back">
                <div className="content-container">
                    <section
                        id="reservations"
                        aria-label="Table reservation section"
                    >
                        <h2 className="storyHeading">Reservations</h2>
                        <div
                            className="reservation-container"
                            aria-label="Reservations"
                        >
                            <div
                                className="reservation-info"
                                aria-label="Reservation information"
                            >
                                <p>
                                    Reserve your table here at Little Lemon and
                                    come enjoy an exclusive meal, masterfully
                                    prepared, specially for you.
                                </p>
                                <img src={restaurantImg} alt="Restaurant" />
                            </div>
                            <div
                                className="reservation-form"
                                aria-label="Reservation form section"
                            >
                                {/* <h3>Reserve a Table</h3> */}
                                <BookingForm
                                    availableTimes={availableTimes}
                                    dispatch={dispatch}
                                    submitForm={submitForm}
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Reservations;
export { initializeTimes, updateTimes };
