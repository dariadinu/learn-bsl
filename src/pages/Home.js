import React from "react";
import { ButtonAppBar } from "../components/Header";
import { Grid, Paper, styled, ThemeProvider } from "@mui/material";
import theme from "../utils/theme";
import myLogo from "../images/Learn.png";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
}));

export const Home = () => {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <ButtonAppBar />
        <Grid
          container
          spacing={1}
          direction="column"
          justifyContent="center"
          alignItems="center"
          // justify="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs>
            {" "}
            <img src={myLogo}></img>
          </Grid>
          <Grid item xs>
            <Item>
              {" "}
              <a href={"/Lessons"}> Lessons </a>
            </Item>
          </Grid>

          <Grid item xs>
            <Item>
              <a href={"/Games"}>Games</a>
            </Item>
          </Grid>

          <Grid item xs>
            <Item>
              <a href={"/Dictionary"}>Dictionary</a>
            </Item>
          </Grid>
        </Grid>
      </ThemeProvider>
    </main>
  );
};
