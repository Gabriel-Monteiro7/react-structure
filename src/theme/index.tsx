import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import { blue, cyan } from "@material-ui/core/colors";
import { useSelector } from "react-redux";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";

const light = createMuiTheme({
  palette: {
    type: "light",
    primary: blue,
    secondary: cyan,
  },
  typography: {
    fontFamily: "'Maven Pro', sans-serif",
  },
});

const dark = createMuiTheme({
  palette: {
    type: "dark",
    primary: blue,
    secondary: cyan,
  },
  typography: {
    fontFamily: "'Maven Pro', sans-serif",
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
