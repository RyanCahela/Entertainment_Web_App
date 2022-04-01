/* Package Imports */
import { useReducer, useEffect, useState } from "react";
import styled from "styled-components";
import "normalize.css";

/* Global CSS Style Imports */
import GlobalCSSCustomProperties from "../globalCSS/CSS_Variables";
import GlobalCSSElementDefaults from "../globalCSS/CSS_Element_Defaults";
import GlobalCSSUtilityClasses from "../globalCSS/CSS_Utility_Classes";

/* Component Imports */
import SwatchContainer from "../components/colors/SwatchContainer";
import HeadingContainer from "../components/typography/HeadingContainer";
import ParagraphSmall from "../components/typography/ParagraphSmall";
import ParagraphMedium from "../components/typography/ParagraphMedium";
import Heading3 from "../components/typography/Heading3";
import Heading1 from "../components/typography/Heading1";
import SearchInput from "../components/inputs/SearchInput";
import TextInput from "../components/inputs/TextInput";
import Button from "../components/inputs/Button";
import BookmarkIcon from "../components/icons/BookmarkIcon";
import Thumbnail from "../components/card/Thumbnail";
import MediaCard from "../components/card/MediaCard";
import constants from "../components/constants/constants";
import Header from "../components/header/Header";

// CSS
const Container = styled.div`
  max-width: 1200px;
  margin-inline: auto;
  font-family: var(--ff-sans);
  padding-bottom: 5rem;
`;

//State Management
const initialState = [];
const actionStrings = {
  MEDIA_LOAD_SUCCESS: "MEDIA_LOAD_SUCCESS",
  MEDIA_BOOKMARKED: "MEDIA_BOOKMARKED",
};

const reducerFunction = (state, action) => {
  switch (action.type) {
    case actionStrings.MEDIA_LOAD_SUCCESS:
      return action.payload.data;
    case actionStrings.MEDIA_BOOKMARKED:
      return state.map((mediaObject) => {
        if (mediaObject.id === action.payload.id) {
          mediaObject.isBookmarked = true;
        }
        return mediaObject;
      });
    default:
      return state;
  }
};

//Component
function App() {
  const [media, dispatch] = useReducer(reducerFunction, initialState);

  const loadData = () => {
    const URL = constants.BASE_URL;
    async function getMediaData() {
      const data = await fetch(URL);
      const json = await data.json();
      return json;
    }

    getMediaData().then((json) => {
      dispatch({
        type: actionStrings.MEDIA_LOAD_SUCCESS,
        payload: { data: json },
      });
    });
  };
  useEffect(loadData, []);

  return (
    <Container>
      <GlobalCSSElementDefaults />
      <GlobalCSSCustomProperties />
      <GlobalCSSUtilityClasses />

      <Header />
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

      {media.length === 0
        ? null
        : media.map((mediaObject) => {
            return <MediaCard {...mediaObject} />;
          })}
    </Container>
  );
}

export default App;
