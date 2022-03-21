import React from "react";
import styled from "styled-components";

const P = styled.p`
  font-size: var(--fs-400);
  font-weight: var(--fw-light);
`;

const ParagraphMedium = ({ children }) => {
  return <P>{children}</P>;
};

export default ParagraphMedium;
