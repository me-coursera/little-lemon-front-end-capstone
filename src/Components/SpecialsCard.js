import React from "react";

const SpecialsCard = ({ image, title, price, description }) => {
    return (
        <div className="specialsCard">
            <img src={image} alt={title} className="specialsImage" />
            <div className="specialsInfo">
                <div className="specialsTitlePrice">
                    <h3>{title}</h3>
                    <span className="specialsPrice">${price.toFixed(2)}</span>
                </div>
                <p className="specialsDescription">{description}</p>
                <h3 className="specialsDelivery">Order a delivery</h3>
            </div>
        </div>
    );
};

export default SpecialsCard;
