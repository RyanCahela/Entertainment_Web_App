import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  font-weight: var(--fw-light);
  font-size: var(--fs-700);
`;

const Heading1 = ({ props, children }) => {
  return (
    <div>
      <H1>{children}</H1>
    </div>
  );
};

export default Heading1;
