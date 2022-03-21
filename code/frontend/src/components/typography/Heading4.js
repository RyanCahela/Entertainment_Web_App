import React from "react";
import styled from "styled-components";

const H4 = styled.h4`
  font-weight: var(--fw-medium);
  font-size: var(--fs-500);
`;

const Heading4 = ({ props, children }) => {
  return (
    <div>
      <H4>{children}</H4>
    </div>
  );
};

export default Heading4;
