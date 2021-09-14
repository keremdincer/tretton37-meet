import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    background-color: #ededed;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  button, input {
    font-family: 'Montserrat', sans-serif;
  }
`