import React from "react";
import styled from "styled-components";

const Swatch = styled.div`
  background-color: var(${(props) => props.bgColor});
  color: var(${(props) => props.color});
  height: 200px;
  width: 200px;
`;

const ColorSwatch = (props) => {
  return <Swatch {...props}>Swatch</Swatch>;
};

export default ColorSwatch;
