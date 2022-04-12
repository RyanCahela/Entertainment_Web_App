import React from "react";
import Grid from "../components/layout/Grid";
import MediaCard from "../components/card/MediaCard";

const TvPage = ({ tvCards }) => {
  return (
    <div>
      <h3>TV Shows</h3>
      <Grid>
        {tvCards.map((tvCard) => (
          <MediaCard {...tvCard} key={tvCard.id} />
        ))}
      </Grid>
    </div>
  );
};

export default TvPage;
