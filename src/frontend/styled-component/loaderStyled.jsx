import styled, { keyframes } from "styled-components";

const outline = keyframes`
 0% {
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dashoffset: 300;
  }
  100% {
    stroke-dashoffset: 600;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0turn);
  }
  to {
    transform: rotate(-1turn);
  }
`;

export const LoaderSvg = styled.div`
  position: fixed;
  top: 5rem;
  left: 45rem;

  .loderSvg {
    min-height: 100vh;
    display: flex;
    max-width: 5rem;
    animation: ${rotate} 3.6s linear infinite;
    margin: 0 auto;
    position: absolute;
    z-index: 10;
    left: calc(50%);
    top: calc(0%);
  }

  circle {
    fill: none;
    stroke: #ff914d;
    stroke-width: 8px;
    stroke-dasharray: 300;
    animation: ${outline} 2s cubic-bezier(0.77, 0, 0.18, 1) infinite;
  }
`;
