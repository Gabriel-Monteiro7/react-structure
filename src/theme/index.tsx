import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import { lightBlue, teal, indigo } from "@material-ui/core/colors";
import { useSelector } from "react-redux";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";
const light = createMuiTheme({
  palette: {
    type: "light",
    primary: indigo,
    secondary: teal,
  },
  typography: {
    fontFamily: "'Maven Pro', sans-serif",
    h1: {
      fontFamily: "'Maven Pro', sans-serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Maven Pro', sans-serif",
      fontWeight: 500,
    },
    h3: {
      fontFamily: "'Maven Pro', sans-serif",
      fontWeight: 500,
    },
    h4: {
      fontFamily: "'Maven Pro', sans-serif",
      fontWeight: 500,
    },
    h5: {
      fontFamily: "'Maven Pro', sans-serif",
      fontWeight: 500,
    },
    h6: {
      fontFamily: "'Maven Pro', sans-serif",
      fontWeight: 500,
    },
    subtitle1: {
      fontWeight: 500,
    },
    subtitle2: {
      fontWeight: 500,
    },
    body1: {
      fontWeight: 400,
    },
  },
});

const dark = createMuiTheme({
  palette: {
    type: "dark",
    primary: { ...indigo, 500: "#4e6aff" },
    secondary: teal,
  },
  typography: {
    fontFamily: "'Maven Pro', sans-serif",
    h1: {
      fontFamily: "'Maven Pro', sans-serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Maven Pro', sans-serif",
      fontWeight: 500,
    },
    h3: {
      fontFamily: "'Maven Pro', sans-serif",
      fontWeight: 500,
    },
    h4: {
      fontFamily: "'Maven Pro', sans-serif",
      fontWeight: 500,
    },
    h5: {
      fontFamily: "'Maven Pro', sans-serif",
      fontWeight: 500,
    },
    h6: {
      fontFamily: "'Maven Pro', sans-serif",
      fontWeight: 500,
    },
    subtitle1: {
      fontWeight: 500,
    },
    subtitle2: {
      fontWeight: 500,
    },
    body1: {
      fontWeight: 400,
    },
  },
});

const ThemeDefault = ({ children }: any) => {
  const { themeDefault } = useSelector((state: any) => state.root);
  const defaultTheme = themeDefault ? light : dark;

  return (
    <ThemeProvider theme={defaultTheme}>
      <ThemeProviderStyled theme={defaultTheme}>
        <CssBaseline />
        {children}
      </ThemeProviderStyled>
    </ThemeProvider>
  );
};

export const Theme = (Component: any) => (props: any) => {
  return (
    <ThemeDefault>
      <Component {...props} />
    </ThemeDefault>
  );
};
