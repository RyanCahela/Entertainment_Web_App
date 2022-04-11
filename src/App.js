import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { BASE_URL, MediaCategory } from "./components/constants/constants.js";

/* Page Imports */
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import TvPage from "./pages/TvPage";
import BookmarkPage from "./pages/BookmarkPage";

/* Component Imports */
import HeaderComponent from "./components/header/Header";
import SearchInputComponent from "./components/inputs/SearchInput";

const desktopBreakpoint = "1200px";

const Container = styled.div`
  max-width: 1200px;
  margin-inline: auto;
  font-family: var(--ff-sans);
  padding-bottom: 5rem;
  padding-inline: 1rem;

  @media screen and (min-width: ${desktopBreakpoint}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Header = styled(HeaderComponent)`
  @media screen and (min-width: ${desktopBreakpoint}) {
    grid-column: 1 / 2;
  }
`;

const SearchInput = styled(SearchInputComponent)`
  @media screen and (min-width: ${desktopBreakpoint}) {
    grid-row: 1 / 2;
    grid-columns: 1 / -1;
  }
`;

const App = () => {
  const [mediaCards, setMediaCards] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((json) => setMediaCards(json));
  }, []);
  return (
    <Container>
      <Header />
      <SearchInput />
      <Routes>
        <Route path="/" element={<HomePage mediaCards={mediaCards} />} />
        <Route
          path="/movies"
          element={
            <MoviesPage
              movieCards={mediaCards.filter(
                ({ category }) => category === MediaCategory.MOVIE
              )}
            />
          }
        />
        <Route path="/tv" element={<TvPage mediaCards={mediaCards} />} />
        <Route
          path="/bookmarks"
          element={<BookmarkPage mediaCards={mediaCards} />}
        />
      </Routes>
    </Container>
  );
};

export default App;
