import { createGlobalStyle } from "styled-components";

import { Color } from "./variables";

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${Color.mono[900]};
    background: ${Color.mono[100]};
    font-family: sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    padding: 0;
    list-style: none;
    margin: 0;
  }

  @font-face {
    font-family: "Senobi-Gothic";
    font-weight: bold;
    font-display: swap;
    src: url("/assets/fonts/MODI_Senobi-Gothic_2017_0702/Senobi-Gothic-Bold.subset.woff2") format("woff2");
    unicode-range: U+0030-0039, U+002E;
  }
`;
