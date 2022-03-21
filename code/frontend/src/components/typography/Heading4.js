import React from "react";
import styled from "styled-components";

const H4 = styled.h4`
  font-family: var(--ff-sans);
  font-weight: var(--fw-medium);
`;

const Heading4 = ({ props, children }) => {
  return (
    <div>
      <H4>{children}</H4>
    </div>
  );
};

export default Heading4;
