import styled from "styled-components";

export const FeedCardListContainer = styled.div<{ isData?: boolean }>`
  height: 100vh;
  overflow: auto;
  /* overflow: scroll; */
  padding-right: 20px;
  /* width: 300px; */
  /* width: 100%; */
  width: calc(80vw - 410px);
  display: flex;
  flex-direction: column;
  /* width: 75%; */
  @media (max-width: 1300px) {
    width: calc(80vw - 300px);
  }
  @media (min-width: 950px) {
    width: calc(90vw - 300px);
  }
  @media (max-width: 950px) {
    padding-right: 0px;
  }
  @media (max-width: 950px) {
    width: 100%;
  }
`;

// @media (min-width: 1150px) {
//   width: 80vw;
// }

export const NotFoundContainer = styled.div`
  height: calc(100vh - 150px);
  width: 100%;
  /* height: 100%; // */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const NotFoundText = styled.div`
  color: #5a5a89;
  font-weight: 300;
  font-size: 1.125rem;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const NotFoundImg = styled.img`
  width: 133px;
  margin-bottom: 16px;
`;
