import React from "react";
import "./Card.css"

function Card({card}) {
  
  return (
    <li className="place-card">
      <img className="place-card__image" src={card.link} alt={card.title} />

      <button
        aria-label="Remove place"
        className="place-card__delete-button"
        type="button"
      />

      <div className="place-card__description">
        <h2 className="place-card__title">{card.name}</h2>

        <button
          aria-label="Like place"
          className="place-card__like-button"
          type="button"
        />
      </div>
    </li>
  );
}

export default Card;
