import React from "react";
import { ButtonAppBar } from "../components/Header";
import { Grid, Paper, styled, ThemeProvider } from "@mui/material";
import theme from "../utils/theme";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
}));

export const Dictionary = () => {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <ButtonAppBar />
        <h1>Filter on topics:</h1>
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          {/*<Grid item xs>*/}
          {/*  {" "}*/}
          {/*  /!*<img src={myLogo}></img>*!/*/}
          {/*</Grid>*/}

          <Grid item xs>
            <Item>
              {" "}
              <a href={"/Alphabet"}>Alphabet</a>{" "}
            </Item>
          </Grid>

          <Grid item xs>
            <Item>B</Item>
          </Grid>

          <Grid item xs>
            <Item>C</Item>
          </Grid>
        </Grid>
      </ThemeProvider>
    </main>
  );
};
