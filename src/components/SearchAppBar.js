import * as React from "react";
import { Box, Button, Link } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "../pages/familyQuiz.css";

import useBreadcrumbs from "use-react-router-breadcrumbs";

export default function SearchAppBar() {
  const breadcrumbs = useBreadcrumbs();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        // color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          {breadcrumbs.map(({ match, breadcrumb }) => (
            <Link
              href={match.pathname}
              // to={match.pathname}
              underline={"none"}
            >
              {" "}
              <Button variant={"contained"}> {breadcrumb} </Button>
            </Link>
          ))}

          <Box
            sx={{ display: "flex", alignItems: "right", textAlign: "right" }}
          >
            <Typography sx={{ minWidth: 100 }}>
              {" "}
              <Link
                href={"/Lessons"}
                underline={"none"}
                style={{ color: "#FFF" }}
              >
                {" "}
                Lessons{" "}
              </Link>
            </Typography>
            <Typography sx={{ minWidth: 100 }}>
              {" "}
              <Link
                href={"/Games"}
                underline={"none"}
                style={{ color: "#FFF" }}
              >
                Games
              </Link>{" "}
            </Typography>

            <Typography sx={{ minWidth: 100 }}>
              {" "}
              <Link
                href={"/Dictionary"}
                underline={"none"}
                style={{ color: "#FFF" }}
              >
                Dictionary{" "}
              </Link>
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
