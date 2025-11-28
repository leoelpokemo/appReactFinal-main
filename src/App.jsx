import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import { useEffect } from "react";
import api from "./Components/DataProvider/Api";

function App() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    async function loadCards() {
      try {
        const data = await api.getAllCards();
        setCards(data);
        
      } catch (error) {
        console.error(error);
      }
    }

    loadCards();
  }, []);

  async function handleUpdateCards(card) {
    const likeinvertido = !cards.like;
    console.log(likeinvertido);
    await api
      .updateCard(card_id, likeinvertido )

      .catch((error) => {
        console.error("Error updating card:", error);
      });
  }
  
  useEffect(() => {
  console.log("CARDS ACTUALIZADO:", cards);
}, [cards]);

  return (
    
    <>
      <div>
        <Header />
        <Main  cards={cards}/>
        <Footer />
      </div>
    </>
  );
}

export default App;
