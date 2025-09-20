import React from "react";
import ratingStar from "../images/testimonials/star.png";

const TestimonialCard = ({ image, name, starRating, testimonial }) => {
    return (
        <div className="testimonialCard">
            <div className="testimonialRating">
                <div>Rating: </div>
                {[...Array(starRating)].map((_, i) => (
                    <img
                        key={i}
                        src={ratingStar}
                        style={{
                            width: "18px",
                            height: "18px",
                        }}
                        alt="star"
                    />
                ))}
            </div>
            <img src={image} alt={name} className="testimonialUser" />
            <h3>{name}</h3>

            <p>{testimonial}</p>
        </div>
    );
};

export default TestimonialCard;
