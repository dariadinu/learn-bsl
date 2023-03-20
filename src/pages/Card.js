import React from "react";
import classnames from "classnames";
import "./card.scss";
import myLogo from "../images/blackLogo.png";

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <div
      className={classnames("card", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive,
      })}
      onClick={handleClick}
    >
      <div className="card-face card-font-face">
        <img src={myLogo} />
      </div>
      <div className="card-face card-back-face">
        <img src={card.url} />
      </div>
    </div>
  );
};

export default Card;
