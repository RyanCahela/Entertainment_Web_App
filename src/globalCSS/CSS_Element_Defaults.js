import { createGlobalStyle } from "styled-components";

const GlobalCSSElementDefaults = createGlobalStyle`
  /* ! temporary for design system */

*,
*::before,
*::after {
  box-sizing: border-box;
}


body {
  background-color: var(--clr-black);
  color: var(--clr-white);
  margin: 0;
}

ul[class] {
  padding-left: 0;
  list-style: none;
}


`;

export default GlobalCSSElementDefaults;
