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
      <ColorSwatch bgColor="--clr-primary-accent" fontColor="--clr-black" />
      <ColorSwatch bgColor="--clr-primary-dark" fontColor="--clr-white" />
      <ColorSwatch bgColor="--clr-primary-light" fontColor="--clr-black" />
      <ColorSwatch bgColor="--clr-white" fontColor="--clr-black" />
      <ColorSwatch bgColor="--clr-black" fontColor="--clr-white" />
    </Container>
  );
};

export default SwatchContainer;
