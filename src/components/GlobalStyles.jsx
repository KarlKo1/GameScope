import { createGlobalStyle } from "styled-components";
import bgLight from "../assets/bg_light.webp";
import bgDark from "../assets/bg_dark.webp";

const GlobalStyles = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
        
    }

    :root { 
        --body_background: white;
        --body_color: black;
        --box_shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
        --background_img: url(${bgLight});
        --card_color: #b10101;
        --span_color: #0e9bab;


    }
    [data-theme="dark"] {
        --body_background: #18191a;
        --body_color: white;
        --box_shadow: rgba(177, 1, 1, 0.5) 0px 3px 8px;
        --background_img: url(${bgDark});
        --card_color: #b10101;      
        --span_color: #b10101;
    }
    
    html {
        scroll-behavior: smooth;
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
        background-color: var(--body_background);
    }

    h1, h2 {
        font-family: 'Righteous', cursive;

    }


    h1 {
        font-size: clamp(1rem, 8.5vw, 8rem);
        color: white;
    }
    
    h2 {
        font-size: clamp(1.75rem, 2.5vw, 4rem); 
        color:var(--body_color);

    }

    h3 {
        font-size: clamp(1rem, 2.5vw, 2rem); 
    }
    
    p {
        line-height: 200%;
    }

    a {
        text-decoration: none;
        color: var(--body_color);
    }

    input {
        font-weight: bold;
        font-family: "Roboto", sans-serif;
    }

    span{
        font-weight: bold;
        color: var(--span_color);
    }

    
`;

export default GlobalStyles;
