import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

/*********************************************
**********************************************
GENERAL CSS, UNIVERSAL AND COMMON CSS 
*********************************************
**********************************************/

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  /* font-size: 10px; */
  /* 10px / 16px = 0.625 = 62.5% */
  /* Percentage of user's browser font-size setting */
  /* font-size: 70.5%; */

 
}
body {
  box-sizing: border-box;
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  color: $color-primary;
  font-family: "Manrope", sans-serif;

  font-weight: 400;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
// ::selection {
//   background-color: $color-primary-dark;
//   color: $color-white;
// }
`;
export default GlobalStyles;
