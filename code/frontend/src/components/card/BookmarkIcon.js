import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as BookmarkEmpty } from "../../assets/icon-bookmark-empty.svg";
import { ReactComponent as BookmarkFull } from "../../assets/icon-bookmark-full.svg";
import Icon from "../../components/icons/Icon";

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

const BookmarkIcon = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Container>
      {isActive ? (
        <Icon SvgElement={BookmarkFull} />
      ) : (
        <Icon SvgElement={BookmarkEmpty} />
      )}
    </Container>
  );
};

export default BookmarkIcon;
