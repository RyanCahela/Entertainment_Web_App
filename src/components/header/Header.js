import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { Breakpoints } from "../constants/constants";

/* Import SVG Icons */
import { ReactComponent as Logo } from "../../assets/logo.svg";
import HomeIcon from "../icons/HomeIcon";
import MoviesIcon from "../icons/MoviesIcon";
import TvIcon from "../icons/TvIcon";
import BookmarkNavIcon from "../icons/BookmarkNavIcon";

const { DESKTOP } = Breakpoints;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100%;

  @media screen and (min-width: ${DESKTOP}) {
    background-color: var(--clr-primary-dark);
    border-radius: 20px;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    height: 100%;
    min-height: 960px;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  min-width: 135px;

  @media screen and (min-width: ${DESKTOP}) {
    flex-direction: column;
    align-items: center;
    min-width: 0;
    gap: 1rem;
  }
`;

const AvatarContainer = styled.div`
  margin-top: auto;
`;

const AvatarImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid white;
  border-radius: 1000rem;

  @media screen and (min-width: ${DESKTOP}) {
    justify-self: end;
  } ;
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
              <BookmarkNavIcon {...location} />
            </Link>
          </li>
        </NavList>
      </nav>
      <AvatarContainer>
        <AvatarImage src="../../assets/image-avatar.png" alt="profile avatar" />
      </AvatarContainer>
    </NavContainer>
  );
}

export default Header;
