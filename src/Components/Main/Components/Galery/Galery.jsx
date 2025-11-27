import React from "react";
import CardContainer from "../CardContainer/CardContainer";

function Galery({cards}) {
    
  return (
    <section className="places-gallery site__section">
      <CardContainer cards={cards}/>
    </section>
  );
}

export default Galery;
