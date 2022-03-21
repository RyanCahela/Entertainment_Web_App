import React from "react";
import styled from "styled-components";
import SearchIcon from "../../assets/icon-search.svg";

const InputContainer = styled.div`
  display: flex;
`;

const TextInput = styled.input``;

const SearchInput = () => {
  return (
    <InputContainer>
      <img src={SearchIcon} alt="magnifying glass icon" aria-hidden="true" />
      <TextInput type="text" aria-label="search" />
    </InputContainer>
  );
};

export default SearchInput;
