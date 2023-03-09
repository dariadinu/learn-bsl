import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import myLogo from "/usr/local/bin/learn-bsl/src/images/Learn.png";
import { ThemeProvider } from "@mui/material";
import theme from "../utils/theme";
import HomeIcon from "@mui/icons-material/Home";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";

export const ButtonAppBar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" logo={myLogo}>
          <Toolbar>
            <img src={myLogo} height={"70px"} width={"90px"}></img>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <a href={"/"}>
                {" "}
                <HomeIcon fontSize="large"></HomeIcon>{" "}
              </a>
            </Typography>
            <a href={"/"}>
              <Button color="inherit">
                <a href={"/Alphabet"}>
                  <SortByAlphaIcon></SortByAlphaIcon>
                </a>
              </Button>
            </a>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};
