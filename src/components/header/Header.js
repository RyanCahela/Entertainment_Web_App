import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as IconNavBookmark } from "../../assets/icon-nav-bookmark.svg";
import { ReactComponent as IconNavHome } from "../../assets/icon-nav-home.svg";
import { ReactComponent as IconNavMovies } from "../../assets/icon-nav-movies.svg";
import { ReactComponent as IconNavTv } from "../../assets/icon-nav-tv-series.svg";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100%;
  padding-inline: 1rem;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  min-width: 135px;
`;

const AvatarImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid white;
  border-radius: 1000rem;
`;

function Header() {
  return (
    <Container>
      <Logo />
      <nav role="navigation">
        <NavList>
          <li>
            <Link to="/">
              <IconNavHome />
            </Link>
          </li>
          <li>
            <Link to="/movies">
              <IconNavMovies />
            </Link>
          </li>
          <li>
            <Link to="/tv">
              <IconNavTv />
            </Link>
          </li>
          <li>
            <Link to="/bookmarks">
              <IconNavBookmark />
            </Link>
          </li>
        </NavList>
      </nav>
      <AvatarImage src="../../assets/image-avatar.png" alt="profile avatar" />
    </Container>
  );
}

export default Header;
