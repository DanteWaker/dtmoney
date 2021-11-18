import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33cc95;
    --blue-light: #6933ff;

    --text-tittle: #363f5f;
    --text-body: #969cb3;

    --background: #f0f2f5;
    --shape: #ffffff
}

 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;

 }

 // * font-size vem por padrão com 16px (funciona bem no desktop)

 html {
     @media (max-width: 1080px) {
         font-size: 93.75%;
     }

     @media (max-width: 720px) {
         font-size: 87.5%;
     }
 }

 body {
     background: var(--background);
     -webkit-font-smoothing: antialiased;
 }

 body, input, button, textarea {
     font-family: 'Poppins', sans-serif;
     font-weight: 400;
 }

 h1, h2, h3, h4, h5, h6, strong {
     font-weight: 600;
 }

 button {
     cursor: pointer;
 }

 [disabled] {
     cursor: not-allowed;
     opacity: 0.6;
 }

 .react-modal-overlay, .react-modal-content {
     background: rgba(0, 0, 0, 0.5);

     position: fixed;
     top: 0;
     bottom: 0;
     right: 0;
     left: 0;

     display: flex;
     align-items: center;
    justify-content: center;
 }

 .react-modal-content {
     width: 100%;
     max-width: 576px;
     background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
 }

 .react-modal-close {
     position: absolute;
     right: 1.5rem;
     top: 1.5rem;
     border: 0;
     background: transparent;

     transition: filter 0.2s;

     img {
         height: 1rem;
     }

     &:hover{
        filter: brightness(0.8)
    }
 }
`;
