import styled from "styled-components";

export const FilterListContainer = styled.div`
  display: flex;
  /* height: 50px; */
  margin: 10px auto;
  /* width: clamp(16rem, 80vw, 70rem); */

  @media (max-width: 480px) {
    display: none;
  }
`;
