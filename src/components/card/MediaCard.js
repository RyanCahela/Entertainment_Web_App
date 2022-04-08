import React from "react";
import styled from "styled-components";
import Thumbnail from "./Thumbnail.js";
import { ReactComponent as IconCategoryTv } from "../../assets/icon-category-tv.svg";
import { ReactComponent as IconCategoryMovies } from "../../assets/icon-category-movie.svg";
import { MediaCategory } from "../constants/constants.js";

const Container = styled.div`
  width: 100%;
  &:hover {
    transform: scale(1.01);
    cursor: pointer;
  }
`;

const Category = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.375rem;
  position: relative;

  &::after {
    content: "";
    width: 0.1875rem;
    height: 0.1875rem;
    border-radius: 1000px;
    background-color: var(--clr-white-50-percent-opacity);
    right: -11px;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
  }
`;

const MediaDetails = styled.div`
  font-weight: var(--fw-light);
  display: flex;
  align-items: center;
  gap: 1.1875rem; /* 19px */
  margin-block: 8px;
`;

const MediaReleaseYear = styled.span`
  position: relative;

  &::after {
    content: "";
    width: 0.1875rem;
    height: 0.1875rem;
    border-radius: 1000px;
    background-color: var(--clr-white-50-percent-opacity);
    right: -11px;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
  }
`;

const MediaTitle = styled.a`
  color: var(--clr-white);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const MediaCard = ({ year, category, rating, thumbnail, title }) => {
  return (
    <Container>
      <Thumbnail imgPaths={thumbnail.regular} title={title} />
      <MediaDetails>
        <MediaReleaseYear>{year}</MediaReleaseYear>
        <Category>
          {category === MediaCategory.TV ? (
            <IconCategoryTv />
          ) : (
            <IconCategoryMovies />
          )}
          {category}
        </Category>
        <span>{rating}</span>
      </MediaDetails>
      <MediaTitle href="#">The Great Lands</MediaTitle>
    </Container>
  );
};

export default MediaCard;
