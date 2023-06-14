import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

body {

    display: grid;
    margin: auto;
    max-width: 1440px;
    background-color: #F0F0F0;
    font-family: 'Poppins' ;
}
    
img{
    
    max-width: 100%;
    display: block;
}

`;

export { GlobalStyle };