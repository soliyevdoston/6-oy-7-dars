import React from "react";
import Part1 from "./components/part1/part1";
import Part2 from "./components/part2/part2";
import Part3 from "./components/part3/part3";
import styled from "styled-components";
import { GlobalStyle } from "./globalStyles";
export default function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Parent>
        <Part1 />
        <Part2 />
        <Part3 />
      </Parent>
    </>
  );
}
export const Parent = styled.div`
  width: 920px;

  margin: auto;
  display: flex;
  @media (max-width: 700px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;
