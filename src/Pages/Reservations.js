import React, { useReducer } from "react";
import BookingForm from "../Components/BookingForm";

// Initial time slots (can be static for now)
const initializeTimes = () => [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
];

// Reducer to update times based on selected date
const updateTimes = (state, action) => {
    // const selectedDate = action.date;
    // For now, return same times regardless of date
    return initializeTimes();
};

const Reservations = () => {
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
                            </div>
                            <div
                                className="reservation-form"
                                aria-label="Reservation form section"
                            >
                                {/* <h3>Reserve a Table</h3> */}
                                <BookingForm
                                    availableTimes={availableTimes}
                                    dispatch={dispatch}
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
