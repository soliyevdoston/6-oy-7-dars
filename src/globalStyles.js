import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders:opsz,wght@10..72,100..900&display=swap');

  p {
    font-family: 'Lexend Deca', sans-serif;
    margin: 0;
  }
  h1{
    font-family: 'Big Shoulders', sans-serif;
  }
   img {
    display: block;  
    max-width: 100%; 
    height: auto;
  }
`;
