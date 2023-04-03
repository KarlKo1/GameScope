import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
        transition: all 0.5s ease-in-out;
    }

    :root { 
        --body_background: white;
        --body_color: black;
        --box_shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
        --background_img: url(/src/assets/bg_light.png);

    }
    [data-theme="dark"] {
        --body_background: #18191a;
        --body_color: white;
        --box_shadow: rgba(177, 1, 1, 0.5) 0px 3px 8px;
        --background_img: url(src/assets/bg_dark.jpg);
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
        background-color: var(--body_background)
    }

    h1, h2 {
        font-family: 'Righteous', cursive;
        color: white;

    }


    h1 {
        font-size: 5rem;

    }
    
    h2 {
        font-size: 2rem;
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
        color: var(--body_color);
    }

    input {
        font-weight: bold;
        font-family: "Roboto", sans-serif;
    }
`;

export default GlobalStyles;
