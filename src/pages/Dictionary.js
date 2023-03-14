import React, { useEffect, useState } from "react";
import {
  Button,
  FormControlLabel,
  FormGroup,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Switch,
  ThemeProvider,
} from "@mui/material";
import theme from "../utils/theme";
import { filterImages, getAllImages } from "../utils/services";
import { buttons } from "../utils/imageData";

export const Dictionary = () => {
  const [filteredImages, setFilteredImaged] = useState(null);

  useEffect(() => {
    setFilteredImaged(getAllImages());
  }, []);

  function handleImage(e) {
    let imageType = e.target.value;
    imageType !== "all"
      ? setFilteredImaged(filterImages(imageType))
      : setFilteredImaged(getAllImages());

    console.log(imageType);
  }
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
        <div className="dictionary-container">
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
          <h1>Filter on topics:</h1>

          {buttons &&
            buttons.map((type, index) => (
              <>
                <Button key={index} value={type.value} onClick={handleImage}>
                  {type.name}
                </Button>
              </>
            ))}

          <ImageList gap={10} variant="string" cols={9}>
            {filteredImages &&
              filteredImages.map((item, index) => (
                <ImageListItem key={item.id + index}>
                  <img
                    src={item.path}
                    alt={item.id}
                    style={{ transform: checkHand }}
                  />
                  <ImageListItemBar
                    position="top"
                    title={item.id.toUpperCase()}
                  />
                </ImageListItem>
              ))}
          </ImageList>
        </div>
      </ThemeProvider>
    </main>
  );
};
