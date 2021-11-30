import styled from "styled-components";

export const HomePageContainer = styled.div`
  background-color: #f8f8ff;
  /* height: 100vh; */
`;

export const FeedDataContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SeparetorLine = styled.div`
  width: 100%;
  border: 1px solid rgba(217, 219, 233, 1);
  width: clamp(16rem, 80vw, 70rem);
  margin: auto;
  margin-bottom: 0.625rem;
`;

export const Title = styled.div`
  width: clamp(16rem, 80vw, 70rem);
  margin: auto;

  font-weight: 500px;
  font-size: 24px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const FeedDataMainContainer = styled.div`
  display: flex;
  width: clamp(16rem, 80vw, 70rem);
  margin: auto;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 0 20px;
    width: 100%;
  }
  @media only screen and (max-width: 480px) {
    padding: 0 16px;
  }
`;
