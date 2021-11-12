import styled from "styled-components";

export const DataCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.625rem;
  width: 25%;

  @media (max-width: 768px) {
    display: none;
  }
`;
