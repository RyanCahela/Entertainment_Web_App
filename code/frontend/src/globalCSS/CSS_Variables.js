import { createGlobalStyle } from "styled-components";

const GlobalCSSCustomProperties = createGlobalStyle`
:root {
/*******************
Color Names
********************/
/* Primary */
--red: 0deg 97% 63%;
--greyish-blue: 223deg 23% 46%;
--simi-dark-blue: 223deg 36% 14%;
--dark-blue: 223deg 30% 9%;

/* Neutral */
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
Color With Opacity
********************/
--clr-white-75-percent-opacity: hsla(var(--white) / 0.75);
--clr-white-50-percent-opacity: hsla(var(--white) / 0.5);

/*******************
Typography
********************/
--ff-sans: 'Outfit', sans-serif;
--fw-light: 300;
--fw-medium: 500;

/* --fs-100: */
/* --fs-200: */
--fs-300: 0.8125rem; /* 13px */
--fs-400: 0.9375rem; /* 15px */
--fs-500: 1.125rem; /* 18px */
--fs-600: 1.5rem; /* 24px */
--fs-700: 2rem; /* 32px */
/* --fs-800: */
/* --fs-900: */
}



`;

export default GlobalCSSCustomProperties;
