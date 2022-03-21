import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  font-family: var(--ff-sans);
  font-weight: var(--fw-light);
`;

const Heading1 = ({ props, children }) => {
  return (
    <div>
      <H1>{children}</H1>
    </div>
  );
};

export default Heading1;
