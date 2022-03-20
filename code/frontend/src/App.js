import SwatchContainer from "./components/colors/SwatchContainer";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalCustomProperties = createGlobalStyle`
:root {
/*******************
Color Names
********************/
/* Primary */
--red: 0deg 97% 63%;
--greyish-blue: 223deg 23% 46%;
--simi-dark-blue: 223deg 36% 14%;
--dark-blue: 223deg 30% 9%;

/* Neautral */
--white: 0deg 0% 100%;

/*******************
Color Intentions
********************/
--clr-primary-accent: hsl(var(--red));
--clr-primary-light: hsl(var(--greyish-blue));
--clr-primary-dark: hsl(var(--simi-dark-blue));
--clr-white: hsl(var(--white));
--clr-black: hsl(var(--dark-blue));

/*******************
Typography
********************/


}

body {
  background-color: cornsilk ;
  margin: 0;
}
`;

const Container = styled.div`
  max-width: 1200px;
  margin-inline: auto;
`;

function App() {
  return (
    <Container>
      <GlobalCustomProperties />
      <h1>Hello World!</h1>
      <SwatchContainer />
    </Container>
  );
}

export default App;
