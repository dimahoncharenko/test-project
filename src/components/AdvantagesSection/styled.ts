import styled from "styled-components";

export const GridList = styled.div`
  display: grid;
  gap: 2em;

  @media screen and (min-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, min-content);
    row-gap: 2.5em;
    column-gap: 3em;
  }
`;
