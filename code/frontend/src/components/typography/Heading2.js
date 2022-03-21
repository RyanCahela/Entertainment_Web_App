import React from "react";
import styled from "styled-components";

const H2 = styled.h2`
  font-family: var(--ff-sans);
  font-weight: var(--fw-light);
`;

const Heading2 = ({ props, children }) => {
  return (
    <div>
      <H2>{children}</H2>
    </div>
  );
};
export default Heading2;
