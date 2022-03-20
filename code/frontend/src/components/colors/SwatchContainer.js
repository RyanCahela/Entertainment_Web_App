import React from "react";
import ColorSwatch from "./ColorSwatch";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SwatchContainer = () => {
  return (
    <Container>
      <ColorSwatch bgColor="--clr-primary-accent" color="--clr-black" />
      <ColorSwatch bgColor="--clr-primary-dark" color="--clr-white" />
      <ColorSwatch bgColor="--clr-primary-light" color="--clr-black" />
      <ColorSwatch bgColor="--clr-white" color="--clr-black" />
      <ColorSwatch bgColor="--clr-black" color="--clr-white" />
    </Container>
  );
};

export default SwatchContainer;
