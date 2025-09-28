import React from "react";
import specialsData from "../Data/specialsData";
import SpecialsCard from "./SpecialsCard";
import { Link } from "react-router-dom";

const Specials = () => {
    return (
        <section id="specials">
            <div className="content-container">
                <div className="specials-header" aria-label="Specials Heading">
                    <h2>Specials</h2>
                    <Link className="btn" to="/placeholder">
                        Online Menu
                    </Link>
                </div>

                <div className="specials" aria-label="List of Specials">
                    {specialsData.map((specials) => (
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
        </section>
    );
};

export default Specials;
