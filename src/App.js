import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

/* Page Imports */
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import TvPage from "./pages/TvPage";
import BookmarkPage from "./pages/BookmarkPage";

/* Component Imports */
import Header from "./components/header/Header";

const Container = styled.div`
  max-width: 1200px;
  margin-inline: auto;
  font-family: var(--ff-sans);
  padding-bottom: 5rem;
`;

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/bookmarks" element={<BookmarkPage />} />
      </Routes>
    </Container>
  );
};

export default App;
