import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BASE_URL } from "../components/constants/constants.js";

/* Component imports */
import MediaCard from "../components/card/MediaCard";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const HomePage = () => {
  const [mediaCards, setMediaCards] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((json) => setMediaCards(json));
  }, []);
  return (
    <Grid>
      {mediaCards.map((cardInfo) => {
        return <MediaCard {...cardInfo} key={cardInfo.title} />;
      })}
    </Grid>
  );
};

export default HomePage;
