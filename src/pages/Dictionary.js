import React, { useEffect, useState } from "react";
import {
  Button,
  FormControlLabel,
  FormGroup,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Stack,
  Switch,
  ThemeProvider,
} from "@mui/material";
import theme from "../utils/theme";
import { filterImages, getAllImages } from "../utils/services";
import { buttons } from "../utils/imageData";
// import { greetingHi } from ;
import SearchAppBar from "../components/SearchAppBar";
import SearchBar from "../components/SearchBar";
// import { Search } from "@mui/icons-material";

export const Dictionary = () => {
  const [filteredImages, setFilteredImaged] = useState(null);
  const allImages = getAllImages();

  useEffect(() => {
    setFilteredImaged(allImages);
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

  const [keyword, setKeyword] = useState("");
  // const getDataForLetterFromDB = async (letter) => {
  //   const docRef = doc(db, "right-signs-alphabet", "letter" + letter);
  //   const myDoc = await getDoc(docRef);
  //   // console.log(myDoc.data());
  //   return myDoc.data();
  // };

  // const [itemData, setItemData] = useState("");

  const updateKeyword = (e) => {
    // console.log();
    const input = e.target.value;
    setKeyword(input);
    const filtered = allImages.filter((image) => {
      return `${image.id.toLowerCase()}`.startsWith(input.toLowerCase());
    });

    if (input === "") {
      setFilteredImaged(getAllImages());
    } else {
      setFilteredImaged(filtered);
    }
  };

  return (
    <>
      <main>
        <ThemeProvider theme={theme}>
          <Stack direction="column" spacing={2}>
            <SearchAppBar />
            <div className="dictionary-container">
              <div style={{ width: "30%" }}>
                <h1>Filter on topics:</h1>
              </div>

              <SearchBar keyword={keyword} onChange={updateKeyword} />
              <div style={{ width: "70%" }}>
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
              </div>
              {buttons &&
                buttons.map((type, index) => (
                  <>
                    <Button
                      key={index}
                      value={type.value}
                      onClick={handleImage}
                    >
                      {type.name}
                    </Button>
                  </>
                ))}

              <ImageList gap={20} variant="string" cols={4}>
                {filteredImages &&
                  filteredImages.map((item, index) => (
                    <ImageListItem key={item.id + index}>
                      <img
                        src={item.path}
                        alt={item.id}
                        style={{ transform: checkHand, width: "200px" }}
                      />

                      <ImageListItemBar
                        position="top"
                        title={item.id.toUpperCase()}
                      />
                    </ImageListItem>
                  ))}
              </ImageList>
            </div>
          </Stack>
        </ThemeProvider>
      </main>
    </>
  );
};
