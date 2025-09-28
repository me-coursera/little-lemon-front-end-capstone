import React from "react";
import testimonialData from "../Data/testimonialData";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
    return (
        <div className="section-wide">
            <div className="content-container">
                <section id="testimonials">
                    <h2>Testimonials</h2>

                    <div
                        className="testimonials"
                        aria-label="Testimonials from satisfied Customers"
                    >
                        {testimonialData.map((testimonials) => (
                            <TestimonialCard
                                key={testimonials.id}
                                image={testimonials.image}
                                name={testimonials.name}
                                starRating={testimonials.starRating}
                                testimonial={testimonials.testimonial}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Testimonials;
