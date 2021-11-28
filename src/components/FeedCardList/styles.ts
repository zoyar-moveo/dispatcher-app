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
`;

export const NotFoundImg = styled.img`
  width: 150px;
`;
