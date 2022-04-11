import React, { useRef } from "react";
import styled from "styled-components";
import SearchIcon from "../../assets/icon-search.svg";

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  position: relative;
`;

const StyledLabel = styled.label`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

const TextInput = styled.input`
  caret-color: transparent;
  color: var(--clr-white-50-percent-opacity);
  background-color: transparent;
  font-size: var(--fs-450);
  font-weight: var(--fw-light);
  height: 100%;
  position: relative;
  outline: none;
  border: none;
  flex-grow: 1;

  &:active,
  &:focus {
    caret-color: var(--clr-primary-accent);
  }

  @media screen and (min-width: 768px) {
    font-size: var(--fs-600);
  }

  @media screen and (min-width: 1000px) {
    padding-bottom: 0.9375rem; /* 15px */

    &:active,
    &:focus::after {
      /* border-bottom: 1px solid var(--clr-primary-light); */
      content: "";
      height: 2px;
      background-color: var(--clr-primary-light);
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
`;

//guarantees a 5 digit random number.
const randomNumberWith5Digits = (
  Math.random().toString(36) + "00000000000000000"
).slice(2, 7);

const SearchInput = ({ className }) => {
  const { current: inputId } = useRef(`prefix--${randomNumberWith5Digits}`);
  return (
    <InputContainer className={className}>
      <StyledLabel htmlFor={inputId}>
        <StyledImage
          src={SearchIcon}
          alt="magnifying glass icon"
          aria-hidden="true"
        />
      </StyledLabel>
      <TextInput
        id={inputId}
        type="text"
        aria-label="search input"
        placeholder="Search for movies or TV series"
      />
    </InputContainer>
  );
};

export default SearchInput;
