import { useState } from "react";

export const NewPage = () => {
  const [guessedWord, setGuessedWord] = useState();
  const guess = "mama";
  const onChangeInput = (e) => {
    console.log(e.target.value);
    setGuessedWord(e.target.value);
    if (e.target.value === guess) {
      console.log("bravo");
    }
  };
  return (
    <h1>
      This is a new page! <a href={"/"}>Go to home</a>
      <input onChange={onChangeInput}></input>
    </h1>
  );
};
