import "./App.css";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/firebase";
import { Header } from "../components/Header";
import { Box, Button, Stack, TextField } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const generateRandomLetter = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    return alphabet[Math.floor(Math.random() * alphabet.length)];
  };

  const [currentLetter, setCurrentLetter] = useState(generateRandomLetter);
  const [data, setData] = useState();
  const [guess, setGuess] = useState("");

  const getDataForLetterFromDB = async (letter) => {
    const docRef = doc(db, "right-signs-alphabet", "letter" + letter);
    const myDoc = await getDoc(docRef);
    setData(myDoc.data());
  };

  const validateInput = () => {
    if (guess.toLowerCase() === currentLetter.toLowerCase()) {
      alert("Correct");

      setCurrentLetter(generateRandomLetter);
    } else {
      alert("Wrong!");
    }
  };

  useEffect(() => {
    getDataForLetterFromDB(currentLetter);
  }, [currentLetter]);

  return (
    <main>
      <div>
        <Header />
        <Stack>
          <Box>
            <TextField
              id="outlined-basic"
              label="Enter your guess here!"
              variant="outlined"
              onChange={(event) => {
                setGuess(event.target.value);
              }}
            />
            <Button variant="contained" onClick={validateInput}>
              Verify guess
            </Button>
          </Box>

          {data && <img style={{ width: "20%" }} src={data.url}></img>}
        </Stack>
      </div>
    </main>
  );
};

export default App;
