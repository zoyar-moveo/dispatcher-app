import styled from "styled-components";

export const FeedCardListContainer = styled.div`
  height: 100vh;
  margin-right: 20px;
  /* width: 75%; */
  @media (max-width: 768px) {
    margin-right: 0px;
  }
`;

export const FeedCardListScroll = styled.div`
  @media (min-width: 768px) {
    height: 100vh;
    overflow: scroll;
    width: 75%;
  }
`;
