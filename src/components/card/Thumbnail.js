import React, { useState } from "react";
import styled from "styled-components";
import BookmarkIcon from "../icons/BookmarkIcon";
import Spinner from "../animation/Spinner";
import { ReactComponent as PlayIconSvg } from "../../assets/icon-play.svg";
import { BASE_URL, Breakpoints } from "../constants/constants";

const { DESKTOP, TABLET } = Breakpoints;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  //temporary just for UI design, delete after placed in card component

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
    cursor: pointer;
  }

  &:hover > .play-container {
    opacity: 1;
  }
`;

const PlayContainer = styled.div`
  /* changes based on parent hover state */
  opacity: 0;

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
  transition-property: opacity;
  transition-duration: var(--transition-duration-fast);
  transiiotn-timing-function: ease-in;
  z-index: 2;

  &:hover {
    cursor: pointer;
    background-color: var(--clr-white-50-percent-opacity);
    transform: translate(-50%, -53%);
  }

  &:active {
    transform: translate(-50%, -50%);
  }
`;

const BookmarkIconContainer = styled.div`
  position: absolute;
  inset-block-start: 10%;
  inset-inline-end: 10%;
  z-index: 2;
`;

const Image = styled.img`
  object-fit: cover;
  z-index: -1;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.isImageLoaded ? 1 : 0)};
  min-width: 164px;
  min-height: 110px;

  @media screen and (min-width: ${TABLET}) {
    min-width: 220px;
    min-height: 140px;
  }

  @media screen and (min-width: ${DESKTOP}) {
    min-width: 280px;
    min-height: 174px;
  }
`;

const LoadingSpinner = styled(Spinner)`
  opacity: ${(props) => (props.isImageLoaded ? 0 : 1)};
`;

const Thumbnail = ({ imgPaths, title, isBookmarked }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { small, medium, large } = imgPaths;

  const imgUrlSmall = `${BASE_URL}api${small.slice(1)}`;
  const imgUrlMedium = `${BASE_URL}api${medium.slice(1)}`;
  const imgUrlLarge = `${BASE_URL}api${large.slice(1)}`;

  return (
    <Container>
      <Image
        srcSet={`
          ${imgUrlSmall} 328w,
          ${imgUrlMedium} 440w,
          ${imgUrlLarge} 560w
        `}
        alt={`thumbnail for ${title}`}
        onLoad={() => setIsImageLoaded(true)}
        isImageLoaded={isImageLoaded}
      />
      <LoadingSpinner isImageLoaded={isImageLoaded} />
      <PlayContainer className="play-container">
        <PlayIconSvg />
        <span>Play</span>
      </PlayContainer>
      <BookmarkIconContainer>
        <BookmarkIcon isBookmarked={isBookmarked} />
      </BookmarkIconContainer>
    </Container>
  );
};

export default Thumbnail;
