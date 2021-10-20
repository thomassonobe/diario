import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import './index.css'

const theme = createTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff"
    },
    background: {
      paper: "#fff",
      default: "#fafafa"
    },
    primary: {
      light: "rgba(196, 83, 207, 1)",
      main: "rgba(126, 87, 194, 1)",
      dark: "rgba(83, 104, 207, 1)",
      contrastText: "#fff"
    },
    secondary: {
      light: "rgba(255, 169, 215, 1)",
      main: "rgba(240, 98, 146, 1)",
      dark: "#c51162",
      contrastText: "#fff"
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff"
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    }
  },
  typography: {
    h1: {
      fontFamily: 'Bebas Neue, cursive'
    },
    fontFamily: 'Alegreya Sans,  sans-serif',
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);