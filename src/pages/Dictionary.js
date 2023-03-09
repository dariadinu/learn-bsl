import React, { useEffect, useState } from "react";
import { ButtonAppBar } from "../components/Header";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
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

  return (
    <main>
      <ThemeProvider theme={theme}>
        <ButtonAppBar />
        <h1>Filter on topics:</h1>

        {buttons &&
          buttons.map((type, index) => (
            <>
              <button key={index} value={type.value} onClick={handleImage}>
                {type.name}
              </button>
            </>
          ))}
        {/*<img*/}
        {/*  src={require("/usr/local/bin/learn-bsl/src/images/family/father.png")}*/}
        {/*></img>*/}
        <ImageList gap={10} variant="string" cols={9}>
          {filteredImages &&
            filteredImages.map((item, index) => (
              <ImageListItem key={item.id + index}>
                <img src={item.path} alt={item.id} />
                <ImageListItemBar position="top" title={item.id} />
              </ImageListItem>
            ))}
        </ImageList>
        {/*<Grid*/}
        {/*  container*/}
        {/*  spacing={1}*/}
        {/*  direction="row"*/}
        {/*  justifyContent="center"*/}
        {/*  alignItems="center"*/}
        {/*  justify="center"*/}
        {/*  style={{ minHeight: "100vh" }}*/}
        {/*>*/}
        {/*<Grid item xs>*/}
        {/*  {" "}*/}
        {/*  /!*<img src={myLogo}></img>*!/*/}
        {/*</Grid>*/}

        {/*<div id="filters" className="button-group">*/}
        {/*  <button className="button" data-filter=".all">*/}
        {/*    all*/}
        {/*  </button>*/}
        {/*  <button className="button" data-filter=".alphabet">*/}
        {/*    alphabet*/}
        {/*  </button>*/}
        {/*  <button className="button" data-filter=".colours">*/}
        {/*    colours*/}
        {/*  </button>*/}
        {/*  <button className="button" data-filter=".greetings">*/}
        {/*    greetings*/}
        {/*  </button>*/}
        {/*  <button className="button" data-filter=".family">*/}
        {/*    family*/}
        {/*  </button>*/}
        {/*</div>*/}
      </ThemeProvider>
    </main>
  );
};
