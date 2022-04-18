import React from "react";
import styled from "styled-components";
import MediaCardTrending from "./MediaCardTrending";

const Container = styled.div``;

const SideScrollContainer = styled.div`
  display: flex;
  overflow: auto;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const MediaCardTrendingContainer = ({ trendingCards }) => {
  return (
    <Container>
      <h2>Trending</h2>
      <SideScrollContainer>
        {trendingCards.map((card) => (
          <MediaCardTrending {...card} />
        ))}
      </SideScrollContainer>
    </Container>
  );
};

export default MediaCardTrendingContainer;
