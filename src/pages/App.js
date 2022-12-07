import "./App.css";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/firebase";
import { Header } from "../components/Header";
import { Box, Button, Stack, TextField } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

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

  useEffect(() => {
    getDataForLetterFromDB(currentLetter);
  }, [currentLetter]);

  return (
    <main>
      <div>
        <Header />
        <Stack>
          {data && <img style={{ width: "20%" }} src={data.url}></img>}
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
      </div>
    </main>
  );
};

export default App;
