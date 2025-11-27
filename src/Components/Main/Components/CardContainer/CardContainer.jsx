import React from "react";
import Card from "./Card/Card";
import "./CardContainer.css";

function CardContainer({ cards }) {
  return (
    <div className="places-gallery">
      <ul className="places-gallery__list">
        {cards.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </ul>
    </div>
  );
}

export default CardContainer;
