import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const BookingForm = () => {
    const [availableTimes, setAvailableTimes] = useState([
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ]);

    const { isLoading, response, submit } = useSubmit();
    const { onOpen } = useAlertContext();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            email: "",
            date: "",
            time: "",
            guests: "1",
            occasion: "",
        },
        onSubmit: async (values) => {
            await submit("", values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Name is required"),
            email: Yup.string()
                .email("Invalid email")
                .required("Email is required"),
            date: Yup.string().required("Date is required"),
            time: Yup.string().required("Time is required"),
            guests: Yup.number()
                .min(1, "At least 1 guest")
                .max(10, "Maximum 10 guests")
                .required("Number of guests is required"),
            occasion: Yup.string().required("Occasion is required"),
        }),
    });

    useEffect(() => {
        if (!response) return;

        if (response.type === "success") {
            onOpen("success", response.message);
            formik.resetForm();
        } else if (response.type === "error") {
            onOpen("error", response.message);
        }
    }, [response]);

    return (
        <section>
            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
                {/* <h1>Contact me</h1> */}
                <form onSubmit={formik.handleSubmit}>
                    <div style={{ marginBottom: "1rem" }}>
                        <label htmlFor="firstName">Name</label>
                        <input
                            id="firstName"
                            type="text"
                            {...formik.getFieldProps("firstName")}
                            style={{
                                display: "block",
                                width: "100%",
                                padding: "0.5rem",
                            }}
                        />
                        {formik.touched.firstName &&
                            formik.errors.firstName && (
                                <div style={{ color: "red" }}>
                                    {formik.errors.firstName}
                                </div>
                            )}
                    </div>

                    <div style={{ marginBottom: "1rem" }}>
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            {...formik.getFieldProps("email")}
                            style={{
                                display: "block",
                                width: "100%",
                                padding: "0.5rem",
                            }}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <div style={{ color: "red" }}>
                                {formik.errors.email}
                            </div>
                        )}
                    </div>

                    <div style={{ marginBottom: "1rem" }}>
                        <label htmlFor="date">Choose date</label>
                        <input
                            id="date"
                            type="date"
                            {...formik.getFieldProps("date")}
                            style={{
                                display: "block",
                                width: "100%",
                                padding: "0.5rem",
                            }}
                        />
                        {formik.touched.date && formik.errors.date && (
                            <div style={{ color: "red" }}>
                                {formik.errors.date}
                            </div>
                        )}
                    </div>

                    <div style={{ marginBottom: "1rem" }}>
                        <label htmlFor="time">Choose time</label>
                        <select
                            id="time"
                            {...formik.getFieldProps("time")}
                            style={{
                                display: "block",
                                width: "100%",
                                padding: "0.5rem",
                            }}
                        >
                            <option value="">Select time</option>
                            {availableTimes.map((time) => (
                                <option key={time} value={time}>
                                    {time}
                                </option>
                            ))}
                        </select>
                        {formik.touched.time && formik.errors.time && (
                            <div style={{ color: "red" }}>
                                {formik.errors.time}
                            </div>
                        )}
                    </div>

                    <div style={{ marginBottom: "1rem" }}>
                        <label htmlFor="guests">Number of guests</label>
                        <input
                            id="guests"
                            type="number"
                            placeholder="1"
                            min="1"
                            max="10"
                            {...formik.getFieldProps("guests")}
                            style={{
                                display: "block",
                                width: "100%",
                                padding: "0.5rem",
                            }}
                        />
                        {formik.touched.guests && formik.errors.guests && (
                            <div style={{ color: "red" }}>
                                {formik.errors.guests}
                            </div>
                        )}
                    </div>

                    <div style={{ marginBottom: "2rem" }}>
                        <label htmlFor="occasion">Occasion</label>
                        <select
                            id="occasion"
                            {...formik.getFieldProps("occasion")}
                            style={{
                                display: "block",
                                width: "100%",
                                padding: "0.5rem",
                            }}
                        >
                            <option value="">Select occasion</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Engagement">Engagement</option>
                            <option value="Anniversary">Anniversary</option>
                            <option value="Business">Business</option>
                        </select>
                        {formik.touched.occasion && formik.errors.occasion && (
                            <div style={{ color: "red" }}>
                                {formik.errors.occasion}
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="btn"
                        // style={{
                        //     backgroundColor: "purple",
                        //     color: "white",
                        //     padding: "0.75rem 1.5rem",
                        //     border: "none",
                        //     width: "100%",
                        //     cursor: "pointer",
                        // }}
                    >
                        {isLoading ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default BookingForm;
