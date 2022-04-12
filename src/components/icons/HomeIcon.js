import styled from "styled-components";
import { ReactComponent as IconNavHome } from "../../assets/icon-nav-home.svg";

const HomeIcon = styled(IconNavHome)`
  //'pathname' provided when used inside <Link /> from 'react-router-dom'
  color: ${({ pathname }) =>
    pathname === "/" ? "var(--clr-white)" : "var(--clr-primary-light)"};
`;

export default HomeIcon;
