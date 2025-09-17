import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
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
            </Routes>
            <Footer />
            {/* </div> */}
        </>
    );
}

export default App;
