import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

/* Import SVG Icons */
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as IconNavBookmark } from "../../assets/icon-nav-bookmark.svg";
import { ReactComponent as IconNavHome } from "../../assets/icon-nav-home.svg";
import { ReactComponent as IconNavMovies } from "../../assets/icon-nav-movies.svg";
import { ReactComponent as IconNavTv } from "../../assets/icon-nav-tv-series.svg";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100%;

  @media screen and (min-width: 1200px) {
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  min-width: 135px;

  @media screen and (min-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AvatarImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid white;
  border-radius: 1000rem;
`;

//TODO: Possibly create a Nav component to clean up this long file.
const HomeIcon = styled(IconNavHome)`
  color: ${({ pathname }) =>
    pathname === "/" ? "var(--clr-white)" : "var(--clr-primary-light)"};
`;

const MoviesIcon = styled(IconNavMovies)`
  color: ${({ pathname }) =>
    pathname === "/movies" ? "var(--clr-white)" : "var(--clr-primary-light)"};
`;

const TvIcon = styled(IconNavTv)`
  color: ${({ pathname }) =>
    pathname === "/tv" ? "var(--clr-white)" : "var(--clr-primary-light)"};
`;

const BookmarksIcon = styled(IconNavBookmark)`
  color: ${({ pathname }) =>
    pathname === "/bookmarks"
      ? "var(--clr-white)"
      : "var(--clr-primary-light)"};
`;

function Header({ className }) {
  const location = useLocation();

  return (
    <NavContainer className={className}>
      <Logo />
      <nav role="navigation">
        <NavList>
          <li>
            <Link to="/">
              <HomeIcon {...location} />
            </Link>
          </li>
          <li>
            <Link to="/movies">
              <MoviesIcon {...location} />
            </Link>
          </li>
          <li>
            <Link to="/tv">
              <TvIcon {...location} />
            </Link>
          </li>
          <li>
            <Link to="/bookmarks">
              <BookmarksIcon {...location} />
            </Link>
          </li>
        </NavList>
      </nav>
      <AvatarImage src="../../assets/image-avatar.png" alt="profile avatar" />
    </NavContainer>
  );
}

export default Header;
