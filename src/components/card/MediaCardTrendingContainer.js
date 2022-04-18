import React from "react";
import styled from "styled-components";
import MediaCardTrending from "./MediaCardTrending";

const Container = styled.div``;

const SideScrollContainer = styled.div``;

const MediaCardTrendingContainer = ({ trendingCards }) => {
  return (
    <Container>
      <h2>Trending</h2>
      <SideScrollContainer>
        {trendingCards.map((card) => (
          <div>{card.title}</div>
        ))}
      </SideScrollContainer>
    </Container>
  );
};

export default MediaCardTrendingContainer;
