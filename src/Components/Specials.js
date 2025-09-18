import React from "react";
import specials from "../Data/specials";
import SpecialsCard from "./SpecialsCard";
import { Link } from "react-router-dom";

const Specials = () => {
    return (
        <div className="content-container">
            <div className="specials-header">
                <h1>Specials</h1>
                <Link className="btn" to="/placeholder">
                    Online Menu
                </Link>
            </div>

            <div className="specials">
                {specials.map((specials) => (
                    <SpecialsCard
                        key={specials.id}
                        image={specials.image}
                        title={specials.title}
                        price={specials.price}
                        description={specials.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Specials;
