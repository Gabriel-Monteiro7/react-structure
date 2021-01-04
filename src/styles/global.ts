import styled, { css, createGlobalStyle } from "styled-components";

// Dispositivos small (telefones em modo paisagem, com 576px ou mais)
export const sm = 576;

// Dispositivos médios (tablets com 768px ou mais)
export const md = 768;

// Dispositivos large (desktops com 992px ou mais)
export const lg = 992;

// Dispositivos extra large (desktops grandes com 1200px ou mais)
export const xl = 1200;

export const defaultBar = (
  theme: any,
  width: any = 10,
  borderRadius: any = 0,
  background = null
) => css`
  ::-webkit-scrollbar {
    width: ${width}px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${theme};
    border-radius: ${borderRadius}px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    /* background-color: "transparent"; */
    border-radius: ${borderRadius}px;

  }
`;

export const GlobalStyle = createGlobalStyle`
  html,body,#root{
    ${defaultBar("#9e9e9e", 10, 1)}
  }
`;
