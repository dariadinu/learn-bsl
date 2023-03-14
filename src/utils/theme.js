import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Anek Malayalam",
  },
  status: {
    danger: "#64748B",
  },
  palette: {
    primary: {
      light: "#bed9fa",
      main: "#0278FF",
      dark: "#001aa6",
      contrastText: "#fff",
      contrastThreshold: 4.5,
    },
    secondary: {
      light: "#ffb54c",
      main: "#FF8902",
      darker: "#ea4c05",
      contrastText: "#fff",
      contrastThreshold: 4.5,
    },
    neutral: {
      main: "#FF8902",
      contrastText: "#fff",
    },
  },
});

export default theme;
