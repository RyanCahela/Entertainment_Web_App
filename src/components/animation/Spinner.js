import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation-name: ${rotate};
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  background: var(--clr-primary-dark);
  border: 2px solid var(--clr-white);
  color: #333;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75px;
  height: 75px;
`;

export default Spinner;
