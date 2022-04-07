import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      paper: "#504E4F",
      default: "#504E4F",
    },
    primary: {
      main: "#2e7d32",
      light: "#6C8F58",
      dark: "#1b5e20",
      contrastText: "#fff",
    },
    secondary: {
      main: "#FE0000",
      light: "#FE0000",
      dark: "#FC0D1B",
      contrastText: "#fff",
    },
    success: {
      main: "#2e7d32",
      light: "#4caf50",
      dark: "#1b5e20",
      contrastText: "#ffffff",
    },
    error: {
      main: "#d32f2f",
      light: "#ef5450",
      dark: "#c62828",
      contrastText: "#fff",
    },
    info: {
      main: "#0288d1",
      light: "#03a9f4",
      dark: "#01579b",
      contrastText: "#fff",
    },
    warning: {
      main: "#ed6c02",
      light: "#ff9800",
      dark: "#e65100",
      contrastText: "#ffffff",
    },
    grey: {
      50: "#fff",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      600: "#504E4F", // 400 background default
      500: "#3C3C3C", // 500
      700: "#333333", // 700
      800: "#424242",
      900: "#212121",
    },
  },
});

export default theme;
