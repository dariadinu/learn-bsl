import React, { useEffect, useState } from "react";
import {
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Link,
  Paper,
  Stack,
  styled,
  Switch,
  ThemeProvider,
} from "@mui/material";
import theme from "../utils/theme";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/firebase";
import "./familyQuiz.css";
import SearchAppBar from "../components/SearchAppBar";
import rightHand from "../images/right.png";
import leftHand from "../images/left.png";
import Button from "@mui/material/Button";

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
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#ffffff",
    ...theme.typography.fontFamily,
    textAlign: "center",
    color: "#000000",
    // height: 200,
    lineHeight: "50px",
  }));

  return (
    <main>
      <ThemeProvider theme={theme}>
        <Stack direction="column" spacing={2}>
          <SearchAppBar />

          <div className="alphabet-container">
            <Grid
              container
              spacing={1}
              direction="row"
              justifyContent="center"
              alignItems="center"
              // justify="center"
              style={{ minHeight: "70vh" }}
            >
              <Grid item xs={12}>
                <h1>Alphabet and FingerSpelling!</h1>
              </Grid>
              <Grid item xs={12}>
                <h2>FingerSpelling</h2>
              </Grid>

              <Grid item xs={12}>
                <Item elevation={9}>
                  Fingerspelling is a method of spelling words using hand
                  movements. The fingerspelling alphabet is used in sign
                  language to spell out names of people and places for which
                  there is not a sign. Fingerspelling can also be used to spell
                  words for signs that the signer does not know the sign for, or
                  to clarify a sign that is not known by the person reading the
                  signer. Fingerspelling signs are often also incorporated into
                  other signs. British Sign Language (BSL) uses a two-handed
                  alphabet however some other sign languages, such as American
                  Sign Language (ASL), use a one-handed alphabet.
                </Item>
              </Grid>
              <Grid item xs={2}>
                <img src={rightHand} style={{ width: "200px" }}></img>
              </Grid>
              <Grid item xs>
                <Item elevation={8}>
                  Vowels will always be on your non-dominant hand, and with your
                  dominant hand you point at one finger at a time to represent
                  the vowel. To clarify, each of the fingers on your base hand
                  represents a vowel in this order: A (thumb), ‘E’ (index), ‘I’
                  (middle), ‘O’ (ring), ‘U’ (pinky).
                </Item>
              </Grid>

              <Grid item xs={2}>
                <img src={leftHand} style={{ width: "200px" }}></img>
              </Grid>

              <Grid item xs={9}>
                <h2>Alphabet</h2>
              </Grid>
              <Grid item xs={3}>
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
              </Grid>
            </Grid>

            <ImageList gap={10} variant="string" cols={4}>
              {itemData.map((item, index) => (
                <ImageListItem key={item.id + index}>
                  <img
                    src={item.url}
                    alt={"poza"}
                    loading="lazy"
                    style={{ transform: checkHand, width: "290px" }}
                  />
                  <ImageListItemBar position="top" title={item.id} />
                </ImageListItem>
              ))}
            </ImageList>
            <Container
              maxWidth="md"
              component="footer"
              sx={{
                borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                mt: 8,
                py: [3, 6],
              }}
            >
              <Button fullWidth variant={"contained"}>
                <Link
                  underline={"none"}
                  href={"/Lessons"}
                  style={{ color: "#fff" }}
                >
                  Proceed to Lessons
                </Link>
              </Button>
            </Container>
          </div>
        </Stack>
      </ThemeProvider>
    </main>
  );
};
