import styled from "styled-components";

export const Grid = styled.div`  
  @media screen and (min-width: 960px) {
    display: grid;
    gap: 3em;
    padding: 3em;
    grid-template-areas: 
      "main sidebar"
      "main .";
    grid-template-columns: 1fr max-content;
  }
`;
