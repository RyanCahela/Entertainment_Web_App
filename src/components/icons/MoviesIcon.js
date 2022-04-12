import styled from "styled-components";
import { ReactComponent as IconNavMovies } from "../../assets/icon-nav-movies.svg";

const MoviesIcon = styled(IconNavMovies)`
  //'pathname' provided when used inside <Link /> from 'react-router-dom'
  color: ${({ pathname }) =>
    pathname === "/movies" ? "var(--clr-white)" : "var(--clr-primary-light)"};
`;

export default MoviesIcon;
