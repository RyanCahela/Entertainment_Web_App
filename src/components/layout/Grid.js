import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(164px, 1fr));
  grid-auto-rows: minmax(110px, auto);
  gap: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(220px, 1fr));
    grid-auto-rows: minmax(140px, auto);
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(4, minmax(280px, 1fr));
    grid-auto-rows: minmax(174px, auto);
  }
`;

export default Grid;
