import React from "react";
import styled from "styled-components";
import Thumbnail from "./Thumbnail.js";

const Container = styled.div`
  width: 280px;
`;

const MediaCard = () => {
  return (
    <Container>
      <Thumbnail />
      <div>
        <span>2019</span>
        <span>Movie</span>
        <span>PG</span>
      </div>
      <div>The Great Lands</div>
    </Container>
  );
};

export default MediaCard;
