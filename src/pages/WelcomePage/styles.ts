import styled from "styled-components";

export const WelcomeContainer = styled.div`
  height: 100vh;
  display: flex;
  letter-spacing: 0.25px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LogoArea = styled.div`
  background-color: #262146;
  height: 100vh;
  width: 35%;
  left: 0;
  display: inline-flex;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 30vh;
  }
`;

export const ContentArea = styled.div`
  background-color: #f8f8ff;
  width: 65%;
  display: inline-flex;
  right: 0;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  @media (max-width: 768px) {
    width: 100%;
    height: 70vh;
    display: block;
  }
`;

export const TextBtnContsiner = styled.div`
  width: 28.125rem;
  margin-left: 60px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    margin: 0;
    width: 100%;
    height: 100%;
    justify-content: space-between;
  }
`;

export const TextContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0;
  }
  @media (max-width: 480px) {
    line-height: 45px;
  }
`;

export const LogoImg = styled.img`
  width: 14rem;
  @media (max-width: 768px) {
    width: 10rem;
  }
`;

export const Title = styled.div`
  color: #5a5a89;
  font-weight: 300;
  font-size: 2rem;
  margin-bottom: 24px;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Subtitle = styled.div`
  font-weight: 200;
  font-size: 1.5rem;
  color: #b3b3cb;
  margin-bottom: 48px;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
