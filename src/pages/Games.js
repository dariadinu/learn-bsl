import React from "react";
import { Grid, Link, Paper, Stack, styled, ThemeProvider } from "@mui/material";
import theme from "../utils/theme";
import SearchAppBar from "../components/SearchAppBar";

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
        <Stack spacing={2} direction="column">
          <SearchAppBar />
          <div className="home-container">
            <Grid
              container
              spacing={1}
              direction="row"
              justifyContent="center"
              alignItems="center"
              justify="center"
              style={{ minHeight: "70vh" }}
            >
              <Grid item xs>
                <Item elevation={24}>
                  {" "}
                  <Link underline="none" href={"/game1"}>
                    {" "}
                    Fingerspelling Challenge{" "}
                  </Link>{" "}
                </Item>
              </Grid>

              <Grid item xs>
                <Item elevation={24}>
                  <Link underline="none" href={"/new-game"}>
                    Guess the words
                  </Link>
                </Item>
              </Grid>

              <Grid item xs>
                <Item elevation={24}>
                  <Link underline="none" href={"/MemoryGame"}>
                    Memory Game
                  </Link>
                </Item>
              </Grid>
            </Grid>
          </div>
        </Stack>
      </ThemeProvider>
    </main>
  );
};
