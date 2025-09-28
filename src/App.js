import { submitAPI } from "./api.js";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Pages/Main";
import Reservations from "./Pages/Reservations";
import Placeholder from "./Pages/Placeholder";
import Footer from "./Components/Footer";
import ConfirmedBooking from "./Pages/ConfirmedBooking";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AlertProvider } from "./context/alertContext";
import Alert from "./Components/Alert";
import useBookings from "./hooks/useBookings";

function App() {
    const navigate = useNavigate();
    const { addBooking } = useBookings();

    const submitForm = (formData) => {
        const success = submitAPI(formData);
        if (success) {
            // alert("Reservation submitted successfully!");
            addBooking(formData);
            navigate("/confirmed");
        } else {
            alert("Submission failed. Please try again.");
        }
    };

    return (
        <>
            <AlertProvider>
                {/* <div className="page-wrapper"> */}
                <div className="sticky" aria-label="Sticky Header">
                    <Header />
                </div>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route
                        path="/reservations"
                        element={<Reservations submitForm={submitForm} />}
                    />

                    <Route path="/confirmed" element={<ConfirmedBooking />} />
                    <Route path="/placeholder" element={<Placeholder />} />
                </Routes>
                <Footer />
                <Alert />
                {/* </div> */}
            </AlertProvider>
        </>
    );
}

export default App;
