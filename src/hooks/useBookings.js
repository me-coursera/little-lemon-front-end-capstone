import { useState, useEffect } from "react";

const STORAGE_KEY = "little-lemon-bookings";

export default function useBookings() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            setBookings(JSON.parse(stored));
        }
    }, []);

    const addBooking = (newBooking) => {
        const updated = [...bookings, newBooking];
        setBookings(updated);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    };

    return { bookings, addBooking };
}
