import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Anek Malayalam",
  },
  status: {
    danger: "#64748B",
  },
  palette: {
    secondary: {
      light: "#EDF4FF",
      main: "#1e78ff",
      dark: "#001aa6",
      contrastText: "#fff",
      contrastThreshold: 4.5,
    },
    primary: {
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
