import React from "react";
import Grid from "../components/layout/Grid";

/* Component imports */
import MediaCard from "../components/card/MediaCard";
import MediaCardTrendingContainer from "../components/card/MediaCardTrendingContainer.js";

const HomePage = ({ mediaCards }) => {
  return (
    <div>
      <MediaCardTrendingContainer
        trendingCards={mediaCards.filter(({ isTrending }) => isTrending)}
      />
      <Grid>
        {mediaCards.map((cardInfo) => {
          return <MediaCard {...cardInfo} key={cardInfo.id} />;
        })}
      </Grid>
    </div>
  );
};

export default HomePage;
