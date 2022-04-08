import React, { useEffect, useState } from "react";
import { BASE_URL } from "../components/constants/constants.js";
import Grid from "../components/layout/Grid";

/* Component imports */
import MediaCard from "../components/card/MediaCard";

const HomePage = ({ mediaCards }) => {
  return (
    <Grid>
      {mediaCards.map((cardInfo) => {
        return <MediaCard {...cardInfo} key={cardInfo.id} />;
      })}
    </Grid>
  );
};

export default HomePage;
