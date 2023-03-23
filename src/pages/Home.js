import React from "react";
import { Grid, Link, Paper, Stack, styled, ThemeProvider } from "@mui/material";
import theme from "../utils/theme";
import "./familyQuiz.css";
import SearchAppBar from "../components/SearchAppBar";
import myLogo from "../images/blackLogo.png";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.primary.main,
  // ...theme.typography.fontFamily,
  // padding: theme.spacing(1),
  // textAlign: "center",
  // color: theme.palette.text.primary,
  // lineHeight: "1.5",
  backgroundColor: "#ffffff",
  ...theme.typography.fontFamily,
  textAlign: "center",
  color: theme.palette.text.secondary,
  // height: 200,
  lineHeight: "50px",
}));

export const Home = () => {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <Stack
          direction="column"
          // divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <SearchAppBar />

          <div className="home-container">
            <Grid
              container
              spacing={1}
              direction="row"
              justifyContent="center"
              alignItems="center"
              // justify="center"
              style={{ minHeight: "70vh" }}
            >
              <Grid item xs={9}>
                <Item elevation={8}>
                  <img
                    src={myLogo}
                    alt="Logo"
                    className="logo"
                    style={{ width: "400px" }}
                  />
                </Item>
              </Grid>
              <Grid item xs={9}>
                <Item elevation={8}>
                  <Link href={"/Alphabet"} underline="none">
                    {" "}
                    Get started with BSL!
                  </Link>
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item elevation={8}>
                  {" "}
                  <Link href={"/Lessons"} underline="none">
                    Lessons
                  </Link>
                </Item>
              </Grid>

              <Grid item xs={4}>
                <Item elevation={8}>
                  <Link href={"/Games"} underline="none">
                    Games
                  </Link>
                </Item>
              </Grid>

              <Grid item xs={4}>
                <Item elevation={8}>
                  <Link href={"/Dictionary"} underline="none">
                    Dictionary
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
