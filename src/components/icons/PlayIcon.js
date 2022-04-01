import React from "react";
import styled from "styled-components";
import { ReactComponent as PlayIconSvg } from "../../assets/icon-play.svg";
import BookmarkIcon from "./BookmarkIcon";

const Container = styled.div`
  /* display: flex; */
`;

const PlayIcon = () => {
  return (
    <Container>
      <PlayIconSvg />
      <span>Play</span>
    </Container>
  );
};

export default PlayIcon;
