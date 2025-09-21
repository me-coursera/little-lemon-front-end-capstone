import React from "react";
import ma_a from "../images/Mario_and_Adrian_A.jpg";
import ma_b from "../images/Mario_and_Adrian_B.jpg";

const Story = () => {
    return (
        <div className="content-container">
            <section id="story" aria-label="Our Story">
                <div className="story-text">
                    <h2 className="storyHeading">Our Story</h2>
                    <h1>Little Lemon</h1>
                    <h2 className="location">Chicago</h2>
                    <p>
                        The Little Lemon Restaurant is one of Chicago’s
                        best-kept secrets, nestled in a charming corner of the
                        city near bustling malls, thriving businesses, and
                        vibrant schools. Founded by Mario and Adrian, whose
                        passion for Mediterranean cuisine was ignited during an
                        inspiring journey to Portugal, they returned home
                        determined to bring the rich flavors, warmth, and
                        diversity of the Mediterranean to their Chicago
                        community through an authentic and masterfully crafted
                        dining experience.
                    </p>
                </div>
                <div className="story-images">
                    <div style={{ height: "300px" }}></div>
                    <img
                        src={ma_a}
                        alt="Mario and Adrian img1"
                        className="img1"
                    />

                    <img
                        src={ma_b}
                        alt="Mario and Adrian img2"
                        className="img2"
                    />
                </div>
            </section>
        </div>
    );
};

export default Story;
