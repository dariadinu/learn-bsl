import React, { useEffect, useState } from "react";
import { ButtonAppBar } from "../components/Header";
import {
  FormControlLabel,
  FormGroup,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Switch,
  ThemeProvider,
} from "@mui/material";
import theme from "../utils/theme";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/firebase";

export const Alphabet = () => {
  const alphabetLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const [itemData, setItemData] = useState([]);

  const getDataForLetterFromDB = async (letter) => {
    const docRef = doc(db, "right-signs-alphabet", "letter" + letter);
    const myDoc = await getDoc(docRef);

    return myDoc.data();
  };

  const getLetterData = async () => {
    const itemDataTemp = [];

    for (let i = 0; i < alphabetLetters.length; i++) {
      const letterData = await getDataForLetterFromDB(alphabetLetters[i]);
      itemDataTemp.push({
        id: alphabetLetters[i],
        url: letterData.url,
      });
    }
    setItemData(itemDataTemp);
  };

  useEffect(() => {
    getLetterData();
  }, []);

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

  return (
    <main>
      <ThemeProvider theme={theme}>
        <ButtonAppBar />
        <h1>Letters of the alphabet !</h1>
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
        <ImageList gap={10} variant="string" cols={9}>
          {itemData.map((item, index) => (
            <ImageListItem key={item.id + index}>
              <img
                src={item.url}
                alt={"poza"}
                loading="lazy"
                style={{ transform: checkHand }}
              />
              <ImageListItemBar position="top" title={item.id} />
            </ImageListItem>
          ))}
        </ImageList>
      </ThemeProvider>
    </main>
  );
};
