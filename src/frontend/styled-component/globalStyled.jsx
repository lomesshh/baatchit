import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --background-color: #F9FAFB;
  --card-background: #fff;
  --text-primary-color: #FF914D; 
  --text-color: #36373B; 
  --box-shadow: rgba(0, 0, 0, 0.3);
}

[data-theme='dark'] {
  --background-color: #18191A;
  --card-background: #232626;
  --text-primary-color: #FF914D;
  --text-color: rgb(214, 214, 214);
  --box-shadow: rgba(255, 255, 255, 0.44); 
}

html {
  scroll-behavior: smooth;
}

body, .App {
  background-color: var(--background-color);
}

i, button {
  cursor:pointer;
}

a{
  text-decoration: none;
}

* {
  box-sizing: border-box;
  color: var(--text-color);
  font-family: "Nunito", sans-serif;
  margin: 0;
  padding: 0;
}

`;

export default GlobalStyles;
