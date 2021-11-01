import styled from "styled-components";

export const FilterListContainer = styled.div`
  display: flex;
  height: 50px;
  margin: 10px auto;
  width: clamp(16rem, 75vw, 70rem);

  @media (max-width: 375px) {
    display: none;
  }
`;
