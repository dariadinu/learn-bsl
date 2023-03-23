import React from "react";
import { Grid, Link, Paper, Stack, styled, ThemeProvider } from "@mui/material";
import theme from "../utils/theme";
import SearchAppBar from "../components/SearchAppBar";
import greetButton from "../images/greet2.png";
import coloursButton from "../images/col2.png";
import famButton from "../images/fam2.png";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.primary.main,
  // ...theme.typography.fontFamily,
  // padding: theme.spacing(1),
  // textAlign: "center",
  // color: theme.palette.text.primary,
  // lineHeight: "1.5",
  // import greetButton from "../images/greet.png";
  // import coloursButton from "../images/pencil.png";
  // import famButton from "../images/fam.png";
  backgroundColor: "#ffffff",
  ...theme.typography.fontFamily,
  textAlign: "center",
  color: "#000000",
  // height: 200,
  lineHeight: "50px",
  // lineHeight: "20px",
}));
export const Lessons = () => {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <Stack direction="column" spacing={2}>
          <SearchAppBar />
          <Item>
            <div className="lessons-container">
              <br></br>
              <Grid
                container
                spacing={0}
                direction="column"
                justifyContent="center"
                alignItems="center"
                justify="center"
                // style={{ maxHeight: "90vh" }}
              >
                <Grid item xs={4} style={{ maxHeight: "25vh" }}>
                  <Link underline="none" href={"/GreetingsLesson"}>
                    <img src={greetButton} style={{ width: "500px" }}></img>
                  </Link>
                </Grid>

                <Grid item xs={4} style={{ maxHeight: "25vh" }}>
                  <Link underline="none" href={"/FamilyLesson"}>
                    <img src={famButton} style={{ width: "500px" }}></img>
                  </Link>
                </Grid>

                <Grid item xs={4} style={{ maxHeight: "25vh" }}>
                  <Link underline="none" href={"/ColoursLesson"}>
                    <img src={coloursButton} style={{ width: "500px" }}></img>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Item>{" "}
        </Stack>
      </ThemeProvider>
    </main>
  );
};
