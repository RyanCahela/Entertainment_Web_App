import React, { useState } from "react";
import styled from "styled-components";
import BookmarkEmpty from "../../assets/icon-bookmark-empty.svg";
import BookmarkFull from "../../assets/icon-bookmark-full.svg";

const Container = styled.span`
  background-color: var(--clr-black-50-percent-opacity);
  color: var(--clr-white);
  display: flex;
  width: 2rem;
  height: 2rem;
  border-radius: 1000px;
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--clr-black);
    cursor: pointer;
    background-color: var(--clr-white);
  }
`;

const StyledIcon = styled.object``;

const BookmarkIcon = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Container>
      {isActive ? (
        <StyledIcon
          type="image/svg+xml"
          data={BookmarkFull}
          alt="bookmark icon checked"
        />
      ) : (
        <StyledIcon
          type="image/svg+xml"
          data={BookmarkEmpty}
          alt="bookmark icon unchecked"
        />
      )}
    </Container>
  );
};

export default BookmarkIcon;
