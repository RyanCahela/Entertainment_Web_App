import React, { useState, useContext } from "react";
import styled from "styled-components";
import { ReactComponent as BookmarkEmpty } from "../../assets/icon-bookmark-empty.svg";
import { ReactComponent as BookmarkFull } from "../../assets/icon-bookmark-full.svg";
import MyContext from "../context/MyContext";

const Container = styled.span`
  background-color: var(--clr-black-50-percent-opacity);
  color: var(--clr-white);
  display: flex;
  width: 2rem;
  height: 2rem;
  border-radius: 1000px;
  align-items: center;
  justify-content: center;

  transition-property: background-color, color;
  transition-duration: var(--transition-duration-fast);
  transition-timing-function: ease-in;

  &:hover {
    color: var(--clr-black);
    cursor: pointer;
    background-color: var(--clr-white);
  }
`;

const BookmarkIcon = ({ isBookmarked, id }) => {
  const [isActive, setIsActive] = useState(isBookmarked);

  const { dispatch } = useContext(MyContext);

  return (
    <Container
      onClick={(e) => {
        setIsActive(!isActive);
        dispatch({ type: "bookmarkClick", payload: { id } });
      }}
    >
      {isActive ? <BookmarkFull /> : <BookmarkEmpty />}
    </Container>
  );
};

export default BookmarkIcon;
