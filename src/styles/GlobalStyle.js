import { createGlobalStyle } from "styled-components";
import variable from "./variable";
const GlobalStyle = createGlobalStyle`
  ${variable};
  
  html,body{
    margin:0;
    padding:0;
  }
  body{
    display: grid;
  }
  a{
    text-decoration: none
  }
  *{
    box-sizing: border-box;
    font-family:'Times New Roman', Times, serif;
    margin:0;
    padding:0;
  }
  #root{
    position: relative;
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
@keyframes slide-in {
  from {
    transform: translateX(-5%);
    opacity: 0.1;
  }

  to {
    transform: translateX(0%);
    opacity: 1;
  }
}

  
`
export default GlobalStyle;
