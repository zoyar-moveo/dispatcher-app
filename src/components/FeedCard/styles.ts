import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #d9dbe9;
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
  border-radius: 20px;

  & .flex {
    display: flex;
    &.space-between {
      justify-content: space-between;
    }
    &.end {
      justify-content: flex-end;
    }
  }
`;

export const CardHeader = styled.div`
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.3125rem;
  margin-bottom: 0.875rem;
  color: #14142b;
`;

export const CardSecondaryTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 300;
  color: rgba(90, 90, 137, 0.5);
  line-height: 1.375rem;
  letter-spacing: 0.015625rem;
  margin-bottom: 0.875rem;
`;

export const CardBody = styled.div`
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 1rem;
  color: #5a5a89;
  margin-bottom: 0.875rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;
