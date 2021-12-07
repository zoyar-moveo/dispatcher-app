import styled from "styled-components";

export const DataCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.625rem;
  width: 410px; // to add breakPoint
  @media (max-width: 1300px) {
    width: 300px;
  }
  /* @media (max-width: 1000px) {
    width: 30%;
  } */
`;
