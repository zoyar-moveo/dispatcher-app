import styled from "styled-components";

export const DataCardContainer = styled.div<{ isData: boolean }>`
  display: flex;
  flex-direction: column;
  margin-left: 0.625rem;
  /* width: "412px"; // to add breakPoint */

  /* width: ${(props) => (props.isData ? "30%" : "412px")}; */
  /* @media (max-width: 1000px) {
    width: 30%;
  } */
`;
