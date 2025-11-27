import React from "react";
import Traveler from "./Components/Traveler/Traveler";
import Galery from "./Components/Galery/Galery";

function Main({cards}) {
  console.log("cards main",cards);
  
  
  return (
    <main className="main-content">
      <Traveler/>
      <Galery cards={cards}/>
    </main>
  );
}

export default Main;
