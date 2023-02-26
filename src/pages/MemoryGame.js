import "./app.scss";
import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Card from "./Card";
import { ButtonAppBar } from "../components/Header";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/firebase";

function shuffleCards(array) {
  if (!array || array.length === 0) return [];

  const length = array.length;
  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    const temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}

export const MemoryGame = () => {
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const [moves, setMoves] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [bestScore, setBestScore] = useState(
    JSON.parse(localStorage.getItem("bestScore")) || Number.POSITIVE_INFINITY
  );

  const timeout = useRef(null);

  const disable = () => {
    setShouldDisableAllCards(true);
  };
  const enable = () => {
    setShouldDisableAllCards(false);
  };

  const getDataForLetterFromDB = async (letter) => {
    const docRef = doc(db, "right-signs-alphabet", "letter" + letter);
    const myDoc = await getDoc(docRef);
    // console.log(myDoc.data());
    return myDoc.data();
  };

  const generateRandomLetter = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    return alphabet[Math.floor(Math.random() * alphabet.length)];
  };

  const getUniqueElementsArray = () => {
    const letters = [];
    const guardian = new Set();
    while (letters.length < 6) {
      const letter = generateRandomLetter();
      if (guardian.has(letter)) {
        continue;
      }
      guardian.add(letter);
      letters.push(letter);
    }

    return letters;
  };

  const populateUniqueElementsArray = async () => {
    const letters = getUniqueElementsArray();
    const temp = [];
    for (let i = 0; i < letters.length; i++) {
      const dataForLetter = await getDataForLetterFromDB(letters[i]);
      // console.log("i este ", i);
      // console.log("data letter is ", dataForLetter);
      // console.log("data letter url is ", dataForLetter.url);
      temp.push({
        type: letters[i],
        id: letters[i],
        url: dataForLetter.url,
      });
    }
    setUniqueElementsArray(temp);
    setCards(shuffleCards(temp.concat(temp)));
  };

  const [uniqueElementsArray, setUniqueElementsArray] = useState([]);
  const [cards, setCards] = useState([]);

  const checkCompletion = () => {
    if (
      Object.keys(clearedCards).length === uniqueElementsArray.length &&
      uniqueElementsArray.length !== 0
    ) {
      setShowModal(true);
      const highScore = Math.min(moves, bestScore);
      setBestScore(highScore);
      localStorage.setItem("bestScore", highScore);
    }
  };
  const evaluate = () => {
    const [first, second] = openCards;
    enable();
    if (cards[first].type === cards[second].type) {
      setClearedCards((prev) => ({ ...prev, [cards[first].type]: true }));
      setOpenCards([]);
      return;
    }
    // This is to flip the cards back after 500ms duration
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 500);
  };
  const handleCardClick = (index) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
      setMoves((moves) => moves + 1);
      disable();
    } else {
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };

  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 300);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards]);

  useEffect(() => {
    checkCompletion();
  }, [clearedCards]);

  useEffect(() => {
    populateUniqueElementsArray();
  }, []);

  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };

  const checkIsInactive = (card) => {
    return Boolean(clearedCards[card.type]);
  };

  const handleRestart = async () => {
    setClearedCards({});
    setOpenCards([]);
    setShowModal(false);
    setMoves(0);
    setShouldDisableAllCards(false);

    await populateUniqueElementsArray();
  };

  return (
    <div className="App">
      <ButtonAppBar />
      <header>
        <h1>Memory Game!</h1>
        <div>
          Select two cards with same content consequtively to make them vanish
        </div>
      </header>

      <div className="container">
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              card={card}
              index={index}
              isDisabled={shouldDisableAllCards}
              isInactive={checkIsInactive(card)}
              isFlipped={checkIsFlipped(index)}
              onClick={handleCardClick}
            />
          );
        })}
      </div>
      <footer>
        <div className="score">
          <div className="moves">
            <span className="bold">Moves:</span> {moves}
          </div>
          {localStorage.getItem("bestScore") && (
            <div className="high-score">
              <span className="bold">Best Score:</span> {bestScore}
            </div>
          )}
        </div>
        <div className="restart">
          <Button onClick={handleRestart} color="primary" variant="contained">
            Restart
          </Button>
        </div>
      </footer>
      <Dialog
        open={showModal}
        disableEscapeKeyDown
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Hurray!!! You completed the challenge
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You completed the game in {moves} moves. Your best score is{" "}
            {bestScore} moves.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleRestart();
            }}
            color="primary"
          >
            Restart
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
