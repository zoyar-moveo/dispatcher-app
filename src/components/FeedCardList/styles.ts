import styled from "styled-components";

export const FeedCardListContainer = styled.div<{ isData: boolean }>`
  height: 100vh;
  margin-right: 20px;
  width: 100%; //
  /* width: calc(100% - 410px); // */
  display: flex;
  /* width: 75%; */
  @media (max-width: 800px) {
    margin-right: 0px;
  }
`;

export const FeedCardListScroll = styled.div<{ isToShow: boolean }>`
  @media (min-width: 800px) {
    height: 100vh;
    overflow: auto;
    width: 100%;
  }
`;

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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const NotFoundImg = styled.img`
  width: 133px;
  margin-bottom: 16px;
`;
