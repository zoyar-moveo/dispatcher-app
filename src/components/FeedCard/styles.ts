import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  background-color: #ffffff;
  border: 1px solid #d9dbe9;
  /* box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05); */
  border-radius: 20px;
  height: 242px;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  & .flex {
    display: flex;
    &.space-between {
      justify-content: space-between;
    }
  }
  @media (max-width: 480px) {
    flex-direction: column;
    height: 450px;
  }
`;

export const CardHeader = styled.div`
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.3125rem;
  color: #14142b;
  width: 65%;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const CardSecondaryTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 300px;
  color: rgba(90, 90, 137, 0.5);
  line-height: 1.375rem;
  letter-spacing: 0.015625rem;
`;

export const CardBody = styled.div`
  font-weight: 300px;
  font-size: 0.875rem;
  line-height: 1rem;
  color: #5a5a89;
  display: block;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 2.3em;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  /* margin: 1rem; */
  height: 100%;
  width: 100%;
  justify-content: space-between;
`;

export const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const FlexButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Img = styled.img`
  border-radius: 20px 0px 0px 20px;
  width: clamp(100px, 40%, 244px);
  height: 100%;
  object-fit: cover;
  @media (max-width: 480px) {
    width: 100%;
    border-radius: 20px 20px 0px 0px;
  }
`;
