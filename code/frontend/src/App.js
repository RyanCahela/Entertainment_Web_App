import SwatchContainer from "./components/colors/SwatchContainer";
import styled from "styled-components";
import HeadingContainer from "./components/typography/HeadingContainer";
import GlobalCustomProperties from "./CSS_Variables";

const Container = styled.div`
  max-width: 1200px;
  margin-inline: auto;
`;

function App() {
  return (
    <Container>
      <GlobalCustomProperties />
      <SwatchContainer />
      <HeadingContainer />
    </Container>
  );
}

export default App;
