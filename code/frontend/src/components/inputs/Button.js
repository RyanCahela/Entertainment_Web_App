import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--clr-primary-accent);

  border: none;
  border-radius: 0.375rem; /* 6px */
  color: var(--clr-white);
  font-weight: var(--fw-light);
  font-size: var(--fs-400);
  padding-block: 0.9375rem; /* 15px */
  text-align: center;
  width: 100%;

  /* animation */
  transition-property: background-color, color;
  transition-duration: 0.3s;
  transition-easing-function: ease-in;

  &:hover {
    cursor: pointer;
    background-color: var(--clr-white);
    color: var(--clr-primary-dark);
  }
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
