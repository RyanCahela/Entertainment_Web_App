/* Package Imports */
import styled from "styled-components";
import "normalize.css";

/* Global CSS Style Imports */
import GlobalCSSCustomProperties from "./globalCSS/CSS_Variables";
import GlobalCSSElementDefaults from "./globalCSS/CSS_Element_Defaults";
import GlobalCSSUtilityClasses from "./globalCSS/CSS_Utility_Classes";

/* Component Imports */
import SwatchContainer from "./components/colors/SwatchContainer";
import HeadingContainer from "./components/typography/HeadingContainer";
import ParagraphSmall from "./components/typography/ParagraphSmall";
import ParagraphMedium from "./components/typography/ParagraphMedium";
import Heading3 from "./components/typography/Heading3";
import Heading1 from "./components/typography/Heading1";
import SearchInput from "./components/inputs/SearchInput";
import TextInput from "./components/inputs/TextInput";
import Button from "./components/inputs/Button";
import BookmarkIcon from "./components/icons/BookmarkIcon";
import Thumbnail from "./components/card/Thumbnail";
import MediaCard from "./components/card/MediaCard";

const Container = styled.div`
  max-width: 1200px;
  margin-inline: auto;
  font-family: var(--ff-sans);
  padding-bottom: 5rem;
`;

function App() {
  return (
    <Container>
      <GlobalCSSElementDefaults />
      <GlobalCSSCustomProperties />
      <GlobalCSSUtilityClasses />
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

      <Heading1>Inputs</Heading1>
      <Heading3>Search Input</Heading3>
      <SearchInput />
      <Heading3>Form Input</Heading3>
      <TextInput placeholder="Email Address" isError="true" />
      <TextInput placeholder="Email Address" />
      <TextInput placeholder="Email Address" />
      <Heading3>Buttons</Heading3>
      <Button>Login to your account</Button>
      <div style={{ backgroundColor: "lightgrey" }}>
        <BookmarkIcon />
        <BookmarkIcon />
        <BookmarkIcon />
      </div>

      <Thumbnail />
      <MediaCard />
    </Container>
  );
}

export default App;
