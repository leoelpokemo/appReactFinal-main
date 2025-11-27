import React from "react";
import './Traveler.css'

function Traveler() {
  return (
    <section className="traveler-profile site__section">
      <img
        className="traveler-profile__image"
        src="src/assets/images/mog.jpeg"
        alt="Avatar"
      />

      <div className="traveler-profile__details">
        <h1 className="traveler-profile__name">Leonardo Bobadilla</h1>

        <button
          aria-label="Edit traveler profile"
          className="traveler-profile__edit-btn"
          type="button"
        />

        <p className="traveler-profile__bio">Information Technologies</p>
      </div>

      <button
        aria-label="Add new place"
        className="traveler-profile__add-place-btn"
        type="button"
      />
    </section>
  );
}

export default Traveler;
