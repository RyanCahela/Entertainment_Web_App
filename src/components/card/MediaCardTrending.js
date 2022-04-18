import React from "react";
import styled from "styled-components";
import Thumbnail from "./Thumbnail";
import MediaDetails from "./MediaDetails";

const Container = styled.div`
  min-width: 240px;
  max-width: 470px;
  border-radius: 8px;
  overflow: hidden;
`;

const CardFooter = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
`;

const MediaTitle = styled.h2`
  margin-block: 0;
  font-size: var(--fs-400);
`;

const MediaCardTrending = ({
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
      >
        <CardFooter>
          <MediaDetails {...{ year, rating, category }} />
          <MediaTitle>{title}</MediaTitle>
        </CardFooter>
      </Thumbnail>
    </Container>
  );
};

export default MediaCardTrending;
