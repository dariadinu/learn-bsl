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
// import { greetingHi } from ;
import SearchAppBar from "../components/SearchAppBar";
import SearchBar from "../components/SearchBar";
// import { Search } from "@mui/icons-material";

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

  const [keyword, setKeyword] = useState("");
  // const getDataForLetterFromDB = async (letter) => {
  //   const docRef = doc(db, "right-signs-alphabet", "letter" + letter);
  //   const myDoc = await getDoc(docRef);
  //   // console.log(myDoc.data());
  //   return myDoc.data();
  // };

  // const [itemData, setItemData] = useState("");

  const updateKeyword = (keyword) => {
    console.log(keyword);
    setKeyword(keyword);
    const filtered = filteredImages.filter((image) => {
      return `${image.id.toLowerCase()}`.startsWith(keyword.toLowerCase());
    });

    if (keyword === "") {
      setFilteredImaged(getAllImages());
    } else {
      setFilteredImaged(filtered);
    }

    // console.log(filtered);
    // if (!filteredImages.includes(keyword)) {
    //   console.log("entered if");
    //   const temp = "Word not in dictionary.";
    //   setItemData(temp);
    //   console.log(temp);
    // }
  };

  // const handleSearch = async (event, keyword) => {
  //   console.log("searching");
  //   console.log(keyword);
  //   console.log("handleSubmit ran");
  //   event.preventDefault();
  //   setKeyword(keyword);
  //   const filtered = filteredImages.filter((image) => {
  //     return `${image.id.toLowerCase()}`.startsWith(keyword.toLowerCase());
  //   });
  //   console.log(filtered);
  //   if (filtered === []) {
  //     const temp = [];
  //     for (let i = 0; i < keyword.length; i++) {
  //       const dataForLetter = await getDataForLetterFromDB(
  //         keyword[i].toUpperCase()
  //       );
  //       temp.push({
  //         id: keyword[i],
  //         url: dataForLetter.url,
  //       });
  //     }
  //     setFilteredImaged(temp);
  //   }
  // };

  return (
    <>
      <main>
        <ThemeProvider theme={theme}>
          <div className="dictionary-container">
            <SearchAppBar />
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
                  <Button key={index} value={type.value} onClick={handleImage}>
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
        </ThemeProvider>
      </main>
    </>
  );
};
