import "./App.css";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/firebase";
import { Header } from "../components/Header";
import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  Stack,
  Switch,
  TextField,
} from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const App = () => {
  // const label = { "aria-label": "Switch demo" };
  const generateRandomLetter = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    return alphabet[Math.floor(Math.random() * alphabet.length)];
  };

  const [currentLetter, setCurrentLetter] = useState(generateRandomLetter);
  const [data, setData] = useState();
  const [guess, setGuess] = useState("");
  let [count, setCount] = useState(0);
  let [checked, setChecked] = useState(true);
  const [checkHand, setCheckHand] = useState("none");
  const [hand, setHand] = useState("Right Handed Alphabet");

  const getDataForLetterFromDB = async (letter) => {
    const docRef = doc(db, "right-signs-alphabet", "letter" + letter);
    const myDoc = await getDoc(docRef);
    setData(myDoc.data());
  };

  const validateInput = () => {
    if (guess.toLowerCase() === currentLetter.toLowerCase()) {
      // alert("Correct");
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
      setCurrentLetter(generateRandomLetter);
      setCount(count + 1);
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

  const handleSubmit = (event) => {
    console.log("handleSubmit ran");
    event.preventDefault(); // prevent page refresh
    setGuess("");
  };

  const refreshGame = () => {
    setCount(0);
  };

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

  useEffect(() => {
    getDataForLetterFromDB(currentLetter);
  }, [currentLetter]);

  return (
    <main>
      <div>
        <Header />
        <h2>Correct guesses: {count}</h2>
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

        <Stack>
          {data && (
            <img
              style={{ width: "20%", transform: checkHand }}
              src={data.url}
              alt={"hand sign"}
            ></img>
          )}
          <Box>
            <form onSubmit={handleSubmit}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                label="Enter your guess here"
                value={guess}
                onChange={(event) => {
                  setGuess(event.target.value);
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
          </Box>
        </Stack>
        <Button variant="outlined" onClick={refreshGame}>
          New game
        </Button>
      </div>
    </main>
  );
};

export default App;
