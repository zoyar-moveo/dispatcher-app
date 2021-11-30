import styled from "styled-components";

export const CardContainer = styled.div<{ isData: boolean }>`
  display: flex;
  align-items: center;
  /* width: 100%; */
  width: ${(props) => (props.isData ? "100%" : "412px")}; //
  height: ${(props) => (props.isData ? "fint-contant" : "350px")}; //
  background: #ffffff;
  border: 1px solid #d9dbe9;
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  &:not(:last-child) {
    margin-bottom: 0.625rem;
  }
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
