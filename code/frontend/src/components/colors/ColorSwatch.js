import React from "react";
import styled from "styled-components";

const Swatch = styled.div`
  background-color: var(${(props) => props.bgColor});
  color: var(${(props) => props.fontColor});
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: thin;
  font-family: sans-serif;
`;

const ColorSwatch = (props) => {
  return <Swatch {...props}>Swatch</Swatch>;
};

export default ColorSwatch;
