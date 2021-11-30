import styled from "styled-components";

export const DataCardContainer = styled.div<{ isData: boolean }>`
  display: flex;
  flex-direction: column;
  margin-left: 0.625rem;
  /* width: 25%; */
  width: ${(props) => (props.isData ? "25%" : "412px")};
  /* @media (max-width: 768px) {
    display: none;
  } */
`;
