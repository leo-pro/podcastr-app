import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body{
    background: ${(props) => props.theme.colors.background}
  }

  body, input, text-area, button{
    font: 500 1rem Inter, sans-serif;
    color: ${(props) => props.theme.colors.text}
  }

  h1, h2, h3, h4, h5, h6{
    font-weight: 600;
    font-family: Lexend, sans-serif;
    color: ${(props) => props.theme.colors.headings}
  }

  h1{
    font-size: 2rem;
  }

  h2{
    font-size: 1.5rem;
  }

  button{
    cursor: pointer;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 6px;
    background: #fff;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.BorderLineColor};
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.background};
  }
`;
