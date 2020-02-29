import { useState } from "react";
import axios from 'axios';
import uuid from "uuid";


function useFlip() {
  const [flipped, setFlipped] = useState(true);
  const toggleFlip = () => {
    setFlipped(!flipped);
  }

  return [flipped, toggleFlip];
}

function useAxios(baseUrl) {
  const [cards, setCards] = useState([]);
  const addCard = async (qParameter = "") => {

    let response;

    response = await axios.get(`${baseUrl}/${qParameter}`);

    setCards(cards => [...cards, { ...response.data, id: uuid() }]);
  };

  return [cards, addCard];
}

export { useFlip, useAxios };