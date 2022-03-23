import React from "react";
import styled from "styled-components";
import BookmarkIcon from "../icons/BookmarkIcon";
import { ReactComponent as PlayIconSvg } from "../../assets/icon-play.svg";
import Icon from "../icons/Icon";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    background-color: transparent;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;

    transition-property: background-color;
    transition-duration: var(--transition-duration-fast);
    transition-timing-function: ease-in;
  }

  &:hover::before {
    background-color: var(--clr-black-50-percent-opacity);
  }
`;

const PlayContainer = styled.div`
  display: flex;
  background-color: var(--clr-white-25-percent-opacity);
  border-radius: 1000px;
  justify-content: space-between;
  align-items: center;
  padding-block: 0.5625rem; /* 9px */
  padding-inline-start: 0.5625rem; /* 9px */
  padding-inline-end: 1.5rem;
  position: absolute;
  gap: 1.1875rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  &:hover {
    cursor: pointer;
    background-color: var(--clr-white-50-percent-opacity);
  }
`;

const StyledBookmarkIcon = styled(BookmarkIcon)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
`;

const Image = styled.img`
  object-fit: cover;
  z-index: -1;
`;

const Thumbnail = () => {
  return (
    <Container>
      <Image src="https://picsum.photos/280/174" />
      <PlayContainer>
        <Icon SvgElement={PlayIconSvg} />
        <span>Play</span>
      </PlayContainer>
      <StyledBookmarkIcon />
    </Container>
  );
};

export default Thumbnail;
