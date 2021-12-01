import styled from "styled-components";

export const InnerHomeContainer = styled.div`
  margin: auto;
  @media (min-width: 800px) {
    width: 80vw;
  }
`;

export const HomePageContainer = styled.div`
  background-color: #f8f8ff;
  /* height: 100vh; */
`;

export const FeedDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%; //
  /* justify-content: space-between; // */
  /* justify-content: center; // */
`;

export const SeparetorLine = styled.div`
  width: 100%;
  border: 1px solid rgba(217, 219, 233, 1);
  opacity: 0.5;
  /* width: clamp(16rem, 80vw, 70rem); */
  margin: auto;
`;

export const Title = styled.div`
  /* width: clamp(16rem, 80vw, 70rem); */
  margin: 20px auto;
  line-height: 32px;
  font-weight: 450;
  font-size: 1.5rem;
  color: rgba(38, 33, 70, 1);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const FeedDataMainContainer = styled.div`
  display: flex;
  /* width: clamp(16rem, 80vw, 70rem); */
  margin: auto;
  justify-content: center;
  @media (max-width: 800px) {
    padding: 0 20px;
    width: 100%;
  }
  @media only screen and (max-width: 480px) {
    padding: 0 16px;
  }
`;
