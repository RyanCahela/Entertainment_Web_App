import ColorSwatch from "./components/ColorSwatch";
import { createGlobalStyle } from "styled-components";

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
`;

function App() {
  return (
    <div className="App">
      <GlobalCustomProperties />
      <h1>Hello World!</h1>
      <ColorSwatch bgColor="--clr-primary-accent" color="--clr-black" />
      <ColorSwatch bgColor="--clr-primary-dark" color="--clr-white" />
      <ColorSwatch bgColor="--clr-primary-light" color="--clr-black" />
      <ColorSwatch bgColor="--clr-white" color="--clr-black" />
      <ColorSwatch bgColor="--clr-black" color="--clr-white" />
    </div>
  );
}

export default App;
