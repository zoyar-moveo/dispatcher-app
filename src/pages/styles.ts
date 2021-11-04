import styled from "styled-components";

export const HomePageContainer = styled.div`
  background-color: #f8f8ff;
  height: 100vh;
`;

export const FeedDataContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SeparetorLine = styled.div`
  width: 100%;
  border: 1px solid rgba(217, 219, 233, 1);
  width: clamp(16rem, 75vw, 70rem);
  margin: auto;
  margin-bottom: 0.625rem;
`;

export const FeedDataMainContainer = styled.div`
  display: flex;
  width: clamp(16rem, 75vw, 70rem);
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
