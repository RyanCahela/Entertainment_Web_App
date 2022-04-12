import styled from "styled-components";
import { ReactComponent as IconNavTv } from "../../assets/icon-nav-tv-series.svg";

const TvIcon = styled(IconNavTv)`
  //'pathname' provided when used inside <Link /> from 'react-router-dom'
  color: ${({ pathname }) =>
    pathname === "/tv" ? "var(--clr-white)" : "var(--clr-primary-light)"};
`;

export default TvIcon;
