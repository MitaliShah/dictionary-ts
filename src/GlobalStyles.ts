import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
    box-sizing: border-box;
    }
    * {
    margin: 0;
    }
    body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    }
    img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    }
    input, button, textarea, select {
    font: inherit;
    }
    p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    }
    #root, #__next {
    isolation: isolate;
    }

    body {
        font-family: "Lora", serif;
        font-size: 1rem;
        background-color: var(--white);
        color: var(--black);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    :root {
        /* Primary */
        --violet: hsl(274, 82%, 60%);
        --orange: hsl(0, 100%, 66%);

        /* Neutral*/
        --black: hsl(0, 0%, 2%);
        --very-dark-gray: hsl(0, 0%, 12%);
        --charcoal-gray: hsl(0, 0%, 18%);
        --gray: hsl(0, 0%, 23%);

        --slate-gray: hsl(0, 0%, 51%);
        --pale-gray: hsl(0, 0%, 91%);
        --light-gray: hsl(0, 0%, 96%);
        --white: hsl(0, 0%, 100%);
    }

    .visually-hidden {
        position: absolute;
        overflow: hidden;
        clip: rect(0 0 0 0);
        height: 1px;
        width: 1px;
        margin: -1px;
        padding: 0;
        border: 0;
    }

    .dark-theme {
        background: var(--black);
        color: var(--white);       
    }
`;

export default GlobalStyles;