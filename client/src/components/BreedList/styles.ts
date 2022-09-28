import styled from "styled-components";

export const BreedContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  border: 1px solid black;
  padding: 8px;
`;

export const BreadHeader = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
`;