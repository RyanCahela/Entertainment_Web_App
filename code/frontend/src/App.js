/* Package Imports */
import styled from "styled-components";
import "normalize.css";

/* Global CSS Imports */
import GlobalCustomProperties from "./globalCSS/CSS_Variables";
import GlobalCSSElementDefaults from "./globalCSS/CSS_Element_Defaults";

/* Component Imports */
import SwatchContainer from "./components/colors/SwatchContainer";
import HeadingContainer from "./components/typography/HeadingContainer";
import ParagraphSmall from "./components/typography/ParagraphSmall";
import ParagraphMedium from "./components/typography/ParagraphMedium";
import Heading3 from "./components/typography/Heading3";

const Container = styled.div`
  max-width: 1200px;
  margin-inline: auto;
  font-family: var(--ff-sans);
`;

function App() {
  return (
    <Container>
      {/* <GlobalCSSNormalize /> */}
      <GlobalCSSElementDefaults />
      <GlobalCustomProperties />
      <SwatchContainer />
      <HeadingContainer />
      <Heading3>Paragraph Small</Heading3>
      <ParagraphSmall>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi sunt
        autem iste? Doloribus dignissimos, exercitationem laboriosam, earum
        reiciendis ex error ipsum ad laborum ullam aliquid, quia repellat est
        magnam.
      </ParagraphSmall>
      <Heading3>Paragraph Medium</Heading3>
      <ParagraphMedium>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, optio
        asperiores nostrum, non voluptatem possimus blanditiis incidunt ut
        dolores officiis minus, porro molestias ipsa temporibus minima
        consequatur veritatis. Distinctio, officia.
      </ParagraphMedium>
    </Container>
  );
}

export default App;
