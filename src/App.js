import "./App.css";
import Header from "./Components/Header";
import Main from "./Pages/Main";
import Reservations from "./Pages/Reservations";
import Placeholder from "./Pages/Placeholder";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            {/* <div className="page-wrapper"> */}
            <div className="sticky">
                <Header />
            </div>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/reservations" element={<Reservations />} />
                <Route path="/placeholder" element={<Placeholder />} />
            </Routes>
            <Footer />
            {/* </div> */}
        </>
    );
}

export default App;
