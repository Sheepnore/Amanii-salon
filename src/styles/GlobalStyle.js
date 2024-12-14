import { createGlobalStyle } from "styled-components";
import variable from "./variable";
const GlobalStyle = createGlobalStyle`
  ${variable};
  
  body{
    margin:0;
    padding:0;
    display: grid;
  }
  a{
    text-decoration: none
  }
  *{
    box-sizing: border-box;
  }
`
export default GlobalStyle;
