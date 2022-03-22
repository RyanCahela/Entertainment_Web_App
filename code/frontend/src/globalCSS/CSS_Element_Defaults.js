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

.border-big {
  border: 5px solid red;
}
`;

export default GlobalCSSElementDefaults;
