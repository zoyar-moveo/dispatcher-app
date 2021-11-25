import styled from "styled-components";
import { btnTypeList } from "./Button";

export const ButtonContainer = styled.button<{
  btnType:
    | btnTypeList.primary
    | btnTypeList.secondary
    | btnTypeList.textBtn
    | btnTypeList.welcomeBtn;
}>`
  cursor: pointer;
  padding: 0px 10px;
  height: 2.25rem;

  width: ${(props) =>
    props.btnType === btnTypeList.welcomeBtn ? "100%" : "fit-content"};
  background: ${(props) =>
    props.btnType === btnTypeList.secondary
      ? "#D9DBE9"
      : props.btnType === btnTypeList.textBtn
      ? "none"
      : "#0058B9"};
  color: #${(props) => (props.btnType === btnTypeList.primary || props.btnType === btnTypeList.welcomeBtn ? "FFFFFF" : "5A5A89")};
  border-radius: ${(props) =>
    props.btnType === btnTypeList.welcomeBtn ? "10px" : "20px"};
  border: none;
  font-size: 0.875rem;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.625rem;
  display: flex;
  align-items: center;
  letter-spacing: 0.015625rem;
  justify-content: center;
  text-transform: uppercase;

  & img {
    margin-left: 0.5rem;
  }
  &:hover {
    background-color: ${(props) => {
      if (props.btnType === btnTypeList.textBtn)
        return "rgba(217, 219, 233, 0.3)";
    }};
    opacity: ${(props) => {
      if (props.btnType !== btnTypeList.textBtn) return 0.8;
    }};
  }
`;
