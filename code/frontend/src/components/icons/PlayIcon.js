import React from "react";
import styled from "styled-components";
import { ReactComponent as PlayIconSvg } from "../../assets/icon-play.svg";
import Icon from "../icons/Icon";
import BookmarkIcon from "./BookmarkIcon";

const StyledPlayIcon = styled(Icon)``;

const Container = styled.div`
  /* display: flex; */
`;

const PlayIcon = () => {
  return (
    <Container>
      <StyledPlayIcon SvgElement={PlayIconSvg}></StyledPlayIcon>
      <span>Play</span>
    </Container>
  );
};

export default PlayIcon;
