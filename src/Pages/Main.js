import React from "react";
import Hero from "../Components/Hero";
import Specials from "../Components/Specials";
import Testimonials from "../Components/Testimonials";
import Story from "../Components/Story";

const Main = () => {
    return (
        <>
            {/* <div className="section-wide"> */}
            {/* <div className="content-container"> */}
            <main>
                <Hero />
                <Specials />
                <Testimonials />
                <Story />
            </main>
            {/* </div> */}
            {/* </div> */}
        </>
    );
};

export default Main;
