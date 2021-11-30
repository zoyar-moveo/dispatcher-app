import styled from "styled-components";

export const FeedCardListContainer = styled.div`
  height: 100vh;
  margin-right: 20px;
  /* width: 100%;
  display: flex; */
  /* width: 75%; */
  @media (max-width: 768px) {
    margin-right: 0px;
  }
`;

export const FeedCardListScroll = styled.div<{ isToShow: boolean }>`
  @media (min-width: 768px) {
    height: 100vh;
    overflow: ${(props) => (props.isToShow ? "scroll" : "auto")};
    width: 75%;
  }
`;

export const NotFoundContainer = styled.div`
  height: calc(100% - 100px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const NotFoundText = styled.div`
  color: #5a5a89;
  font-size: 1.125rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const NotFoundImg = styled.img`
  width: 133px;
`;
