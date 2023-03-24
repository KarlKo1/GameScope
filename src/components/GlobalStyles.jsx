import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    
    html {
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #b10101;
        }
    }

    body {
        font-family: 'Roboto', sans-serif;
        width: 100%;
    }

    h2 {
        font-size: 2rem;
        font-family: 'Righteous', cursive;
    }

    h3 {
    font-size: 1.25rem;
    }
    
    p {
        font-size: 1rem;
        line-height: 200%;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyles;
