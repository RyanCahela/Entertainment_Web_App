import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

/* Global CSS Style Imports */
import GlobalCSSCustomProperties from "./globalCSS/CSS_Variables";
import GlobalCSSElementDefaults from "./globalCSS/CSS_Element_Defaults";
import GlobalCSSUtilityClasses from "./globalCSS/CSS_Utility_Classes";

ReactDOM.render(
  <React.StrictMode>
    <GlobalCSSCustomProperties />
    <GlobalCSSElementDefaults />
    <GlobalCSSUtilityClasses />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
