import { createGlobalStyle } from "styled-components";
import { themes } from "./constants/colors";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Inter;
    font-weight: 600;
    font-size: 15px;
    overflow-y: scroll;
    -ms-overflow-style: none;  
    scrollbar-width: none; 
    background: ${themes.dark.main} !important;

  }

  .fade-enter {
    opacity: 0;
  }
  
  .fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }
  
  .fade-exit {
    opacity: 1;
  }
  
  .fade-exit-active {
    opacity: 0;
    transition: opacity 300ms ease-in;
  }

  body::-webkit-scrollbar {
    display: none;
  }
  
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }
`;

export default GlobalStyles;
