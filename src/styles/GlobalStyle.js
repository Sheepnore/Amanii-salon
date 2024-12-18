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
  @keyframes loading-transition {
  from {
    opacity: 0;
    transform:translateX(-50px)
  }
  to{
    opacity: 1;
    transform:translate(0)
  }
}
  
`
export default GlobalStyle;
