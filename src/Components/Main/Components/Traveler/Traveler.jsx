import React from "react";
import './Traveler.css'

function Traveler() {
  return (
    <section className="traveler-profile site__section">
      <img
        className="traveler-profile__image"
        src="src/assets/images/632510e53b3ae17f36993d7993c9fe8f.jpg"
        alt="Avatar"
      />

      <div className="traveler-profile__details">
        <h1 className="traveler-profile__name">Alejandro Villa</h1>

        <button
          aria-label="Edit traveler profile"
          className="traveler-profile__edit-btn"
          type="button"
        />

        <p className="traveler-profile__bio">PhD in Information Technology</p>
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
