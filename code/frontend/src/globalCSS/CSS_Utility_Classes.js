import { createGlobalStyle } from "styled-components";

const GlobalCSSUtilityClasses = createGlobalStyle`

.sr-only:not(:focus):not(:active) {
  clip: rect(0 0 0 0); 
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap; 
  width: 1px;
}
`;

export default GlobalCSSUtilityClasses;
