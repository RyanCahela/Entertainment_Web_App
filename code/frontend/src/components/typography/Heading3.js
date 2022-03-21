import React from "react";
import styled from "styled-components";

const H3 = styled.h3`
  font-family: var(--ff-sans);
  font-weight: var(--fw-medium);
`;

const Heading3 = ({ props, children }) => {
  return (
    <div>
      <H3>{children}</H3>
    </div>
  );
};

export default Heading3;
