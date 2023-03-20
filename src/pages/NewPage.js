import React, { useEffect, useState } from "react";
import {
  Button,
  FormControlLabel,
  FormGroup,
  ImageList,
  ImageListItem,
  Switch,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/firebase";
import { toast, ToastContainer } from "react-toastify";
import theme from "../utils/theme";
import "./familyQuiz.css";
import SearchAppBar from "../components/SearchAppBar";

export const NewPage = () => {
  const [guessedWord, setGuessedWord] = useState("");
  const wordList = [
    "mark",
    "tank",
    "bank",
    "chad",
    "tiger",
    "Bake",
    "Word",
    "List",
    "Four",
    "Five",
    "Nine",
    "Good",
    "Best",
    "Cute",
    "Zero",
    "Huge",
    "Cool",
    "Tree",
    "Race",
    "Rice",
    "Keep",
    "Lace",
    "Beam",
    "Game",
    "Mars",
    "Tide",
    "Ride",
    "Hide",
    "Exit",
    "Hope",
    "Cold",
    "From",
    "Need",
    "Stay",
    "Come",
  ];
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
    let word = wordList[Math.floor(Math.random() * wordList.length)];
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
    populateItemData();
  };

  const validateInput = () => {
    // console.log(e.target.value);
    // setGuessedWord(e.target.value);
    if (guessedWord.toLowerCase() === word.toLowerCase()) {
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
      setWord(chooseRandomWord);
    } else {
      toast.error("Try again!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  useEffect(() => {
    populateItemData();
  }, []);

  return (
    <main>
      <ThemeProvider theme={theme}>
        <div className="game-container">
          <SearchAppBar />
          <h1>Guess the word!</h1>
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
          {/*  deci arata bine cu 500 si 100 */}
          <ImageList
            sx={{ width: 500, height: 100 }}
            // rowHeight={164}
            variant="string"
            cols={word.length}
            // gap={10}
          >
            {itemData.map((item, index) => (
              <ImageListItem key={item.id + index}>
                <img
                  src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.id}
                  style={{ transform: checkHand, width: "100%" }}
                />
              </ImageListItem>
            ))}
          </ImageList>
          <h3>Enter your guess here:</h3>
          <form onSubmit={handleSubmit}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Enter your guess here"
              value={guessedWord}
              onChange={(event) => {
                setGuessedWord(event.target.value);
              }}
            />
            <Button
              type="submit"
              variant="contained"
              onClick={validateInput}
              onKeyDown={validateInput}
            >
              Verify guess
            </Button>
            <ToastContainer />
          </form>
        </div>
      </ThemeProvider>
    </main>
  );
};
