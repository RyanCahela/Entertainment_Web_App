import React, { useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  font-weight: var(--fw-light);
  border-block-end: 1px solid var(--clr-primary-light);
  max-width: max-content;

  &:focus-within {
    caret-color: var(--clr-primary-accent);
    outline: none;
    border: none;
    border-block-end: 1px solid var(--clr-white);
  }

  ${(props) =>
    props.isError && `border-block-end: 1px solid var(--clr-primary-accent)`}
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  padding-inline-start: 1rem;
  padding-block-end: 1.125rem;
  color: var(--clr-white);
  font-size: var(--fs-400);
  font-weight: var(--fw-light);

  &::placeholder {
    color: var(--clr-white-50-percent-opacity);
  }

  &:focus,
  &:active {
    outline: none;
  }
`;

const ErrorMessageDisplay = styled.span`
  color: var(--clr-primary-accent);
  font-size: var(--fs-300);
  visibility: hidden;

  ${(props) => props.isError && `visibility: visible`}
`;

//garantees a 5 digit reandom number.
const randomNumberWith5Digits = (
  Math.random().toString(36) + "00000000000000000"
).slice(2, 7);

const TextInput = ({ placeholder = "no placeholder attribute", isError }) => {
  const { current: inputId } = useRef(`prefix--${randomNumberWith5Digits}`);
  return (
    <Container isError={isError}>
      <label htmlFor={inputId} className="sr-only">
        {placeholder}
      </label>
      <Input id={inputId} type="text" placeholder={placeholder}></Input>
      <ErrorMessageDisplay isError={isError}>
        Can't be empty
      </ErrorMessageDisplay>
    </Container>
  );
};

export default TextInput;
