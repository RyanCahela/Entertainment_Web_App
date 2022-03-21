import React from "react";
import styled from "styled-components";

const P = styled.p`
  font-size: var(--fs-300);
  font-weight: var(--fw-light);
`;

const ParagraphSmall = ({ children }) => {
  return <P>{children}</P>;
};

export default ParagraphSmall;
