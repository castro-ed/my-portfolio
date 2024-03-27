import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5d6172",
    },
    secondary: {
      main: "#000f5e",
    },
  },

  typography: {
    fontFamily: [
      // "Helvetica Neue"',
      // -apple-system",
      // "BlinkMacSystemFont",
      // '"Segoe UI"',
      "Roboto",
      //'"Helvetica Neue"',
      // 'Arial',
      // "sans-serif",
      // '"Apple Color Emoji"',
      // '"Segoe UI Emoji"',
      // '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default theme;
