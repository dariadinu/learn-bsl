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

export const Lessons = () => {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <ButtonAppBar />
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
            <Item>Greetings</Item>
          </Grid>

          <Grid item xs>
            <Item>Colours</Item>
          </Grid>

          <Grid item xs>
            <Item>Fruits</Item>
          </Grid>
          <Grid item xs>
            <Item>Family</Item>
          </Grid>
        </Grid>
      </ThemeProvider>
    </main>
  );
};
