import React from "react";
import Grid from "../components/layout/Grid";
import MediaCard from "../components/card/MediaCard";

const MoviesPage = ({ movieCards }) => {
  return (
    <div>
      <h3>Movies</h3>
      <Grid>
        {movieCards.map((movieCard) => (
          <MediaCard {...movieCard} key={movieCard.title} />
        ))}
      </Grid>
    </div>
  );
};

export default MoviesPage;
