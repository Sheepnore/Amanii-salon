import { css } from "styled-components";
const variable = css`
  :root{
  --page-padding-inline: clamp(1rem, 10vw, 10rem);
  --heading-font-size: clamp(1rem, 1vw, 2rem);
  --button-border-radius: 12px;
  --border-radius: 16px;
  --surrounding-box-shadow: 0 0 5px 5px rgba(128, 128, 128, 0.2);
  --primary-color: rgb(100, 70, 30);
  
  }
`
export default variable;