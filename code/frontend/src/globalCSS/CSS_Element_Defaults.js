import { createGlobalStyle } from "styled-components";

const GlobalCSSElementDefaults = createGlobalStyle`
  /* ! temporary for design system */
body {
  background-color: var(--clr-black);
  color: var(--clr-white);
  margin: 0;
}
`;

export default GlobalCSSElementDefaults;
