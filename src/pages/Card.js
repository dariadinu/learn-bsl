import React from "react";
import classnames from "classnames";
import "./card.scss";

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
        <img
          src={
            "https://www.british-sign.co.uk/british-sign-language/wp-content/uploads/2013/01/large-logo-british-sign-black-1024x216.png"
          }
        />
      </div>
      <div className="card-face card-back-face">
        <img src={card.url} />
      </div>
    </div>
  );
};

export default Card;
