import React, { useRef } from "react";
import styled from "styled-components";
import SearchIcon from "../../assets/icon-search.svg";

const InputContainer = styled.div`
  display: flex;
  align-items: start;
  gap: 1.5rem;
`;

const TextInput = styled.input`
  caret-color: transparent;
  color: var(--clr-white-50-percent-opacity);
  background-color: transparent;
  font-size: var(--fs-600);
  font-weight: var(--fw-light);
  outline: none;
  border: none;
  flex-grow: 1;
  padding-bottom: 0.9375rem; /* 15px */

  &:active,
  &:focus {
    caret-color: var(--clr-primary-accent);
    border-bottom: 1px solid var(--clr-primary-light);
  }
`;

//garantees a 5 digit reandom number.
const randomNumberWith5Digits = (
  Math.random().toString(36) + "00000000000000000"
).slice(2, 7);

const SearchInput = () => {
  const { current: inputId } = useRef(`prefix--${randomNumberWith5Digits}`);
  return (
    <InputContainer>
      <label htmlFor={inputId}>
        <img src={SearchIcon} alt="magnifying glass icon" aria-hidden="true" />
      </label>
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
