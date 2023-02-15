import React, { useState } from "react";
import { ButtonAppBar } from "../components/Header";
import {
  FormControlLabel,
  FormGroup,
  ImageList,
  ImageListItem,
  Switch,
} from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/firebase";
import { toast, ToastContainer } from "react-toastify";

export const NewPage = () => {
  const [guessedWord, setGuessedWord] = useState("");
  const wordList = ["mark", "tank", "bank", "chad"];
  const [itemData, setItemData] = useState([]);
  let [checked, setChecked] = useState(true);
  const [checkHand, setCheckHand] = useState("none");
  const [hand, setHand] = useState("Right Handed Alphabet");

  const switchHandler = (e) => {
    setChecked(e.target.checked);
    if (e.target.checked === false) {
      setCheckHand("scaleX(-1)");
      setHand("Left Handed Alphabet");
    } else {
      setCheckHand("none");
      setHand("Right Handed Alphabet");
    }
  };

  const chooseRandomWord = () => {
    const word = wordList[Math.floor(Math.random() * wordList.length)];
    return word;
  };

  const [word, setWord] = useState(chooseRandomWord);

  const populateItemData = async () => {
    const temp = [];
    for (let i = 0; i < word.length; i++) {
      const dataForLetter = await getDataForLetterFromDB(word[i].toUpperCase());
      temp.push({
        id: word[i],
        url: dataForLetter.url,
      });
    }
    setItemData(temp);
  };

  const getDataForLetterFromDB = async (letter) => {
    const docRef = doc(db, "right-signs-alphabet", "letter" + letter);
    const myDoc = await getDoc(docRef);
    // console.log(myDoc.data());
    return myDoc.data();
  };

  const handleSubmit = (event) => {
    console.log("handleSubmit ran");
    event.preventDefault(); // prevent page refresh
    setGuessedWord("");
    setItemData([]);
    setWord(chooseRandomWord);
    populateItemData();
  };

  const onChangeInput = (e) => {
    console.log(e.target.value);
    setGuessedWord(e.target.value);
    if (e.target.value === word) {
      console.log("bravo");
      // alert("correct");
      toast.success("Correct!", {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <main>
      <ButtonAppBar />
      <h1>Guess the word!</h1>
      <button onClick={populateItemData}>Get a word</button>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={checked}
              onChange={switchHandler}
              name="right/left"
            />
          }
          label={hand}
        />
      </FormGroup>
      <ImageList sx={{ width: 500, height: 450 }} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
              alt={item.id}
              style={{ transform: checkHand }}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <h3>Enter your guess here:</h3>
      <form onSubmit={handleSubmit}>
        <input
          onChange={onChangeInput}
          value={guessedWord}
          // onSubmit={handleSubmit}
        ></input>
        <h4>Press enter to generate new word.</h4>
      </form>
      <ToastContainer />

      <a href={"/"}>Go to home</a>
    </main>
  );
};
