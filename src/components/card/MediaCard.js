import React from "react";
import styled from "styled-components";
import Thumbnail from "./Thumbnail.js";
import Icon from "../icons/Icon";
import { ReactComponent as IconCategoryTv } from "../../assets/icon-category-tv.svg";
import { ReactComponent as IconCategoryMovies } from "../../assets/icon-category-movie.svg";

const Container = styled.div`
  width: 280px;
`;

const MediaCard = ({ year, category, rating, thumbnail, title }) => {
  return (
    <Container>
      <Thumbnail imgSrc={thumbnail.regular} title={title} />
      <div>
        <span>{year}</span>
        {category === "tv" ? (
          <Icon SvgElement={IconCategoryTv} />
        ) : (
          <Icon SvgElement={IconCategoryMovies} />
        )}
        <span>{category}</span>
        <span>{rating}</span>
      </div>
      <div>The Great Lands</div>
    </Container>
  );
};

export default MediaCard;
