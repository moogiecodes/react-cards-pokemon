import React from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import { useFlip } from './hooks';

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  // const [isFacingUp, setIsFacingUp] = useState(true);
  // const flipCard = () => {
  //   setIsFacingUp(isUp => !isUp);
  // };
  const [flipped, toggleFlip] = useFlip();

  return (
    <img
      src={flipped ? front : back}
      alt="playing card"
      onClick={toggleFlip}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
