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

function useAxios(baseUrl, qParameter) {
  const [cards, setCards] = useState([]);
  const addCard = async () => {

    let response;
    if (qParameter) {
      response = await axios.get(`${baseUrl}/${qParameter}`);
    }
    else {
      response = await axios.get(`${baseUrl}`);
    }
    setCards(cards => [...cards, { ...response.data, id: uuid() }]);
  };

  return [cards, addCard];
}

// function useAxios(url) {
//   const [cards, setCards] = useState([]);
//   const addCard = async () => {
//     const response = await axios.get(url)
//     setCards(cards => [...cards, { ...response.data, id: uuid() }]);
//   };

//   return [cards, addCard];
// }



export { useFlip, useAxios };