import React from "react";
import styled from "styled-components";
import Thumbnail from "./Thumbnail.js";
import MediaDetails from "./MediaDetails";

const Container = styled.div`
  width: 100%;
  &:hover {
    transform: scale(1.01);
    cursor: pointer;
  }
`;

const MediaTitle = styled.a`
  color: var(--clr-white);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const MediaCard = ({
  year,
  category,
  rating,
  thumbnail,
  title,
  isBookmarked,
}) => {
  return (
    <Container>
      <Thumbnail
        imgPaths={thumbnail.regular}
        title={title}
        isBookmarked={isBookmarked}
      />
      <MediaDetails {...{ year, rating, category }} />
      <MediaTitle href="#">The Great Lands</MediaTitle>
    </Container>
  );
};

export default MediaCard;
