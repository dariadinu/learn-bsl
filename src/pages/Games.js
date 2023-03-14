import React from "react";
import { Grid, Paper, styled, ThemeProvider } from "@mui/material";
import theme from "../utils/theme";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
}));

export const Games = () => {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <div className="home-container">
          <Grid
            container
            spacing={1}
            direction="row"
            justifyContent="center"
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh" }}
          >
            <Grid item xs>
              <Item>
                {" "}
                <a href={"/game1"}> Fingerspelling Challenge </a>{" "}
              </Item>
            </Grid>

            <Grid item xs>
              <Item>
                <a href={"/new-game"}>Guess the words</a>
              </Item>
            </Grid>

            <Grid item xs>
              <Item>
                <a href={"/MemoryGame"}>Memory Game</a>
              </Item>
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    </main>
  );
};
