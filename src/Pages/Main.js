import React from "react";
import Hero from "../Components/Hero";
import Specials from "../Components/Specials";
import Testimonials from "../Components/Testimonials";

const Main = () => {
    return (
        <>
            {/* <div className="section-wide"> */}
            {/* <div className="content-container"> */}
            <main>
                <Hero />
                <Specials />
                <Testimonials />
            </main>
            {/* </div> */}
            {/* </div> */}
        </>
    );
};

export default Main;
