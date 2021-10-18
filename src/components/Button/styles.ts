import styled from "styled-components";

export const ButtonContainer = styled.button<{
  btnType: "primary" | "secondary" | "text-btn" | "welcome-btn";
}>`
  /* Button */

  cursor: pointer;
  padding: 0px 10px;
  height: 2.25rem;

  width: ${(props) =>
    props.btnType === "welcome-btn" ? "100%" : "fit-content"};
  background: ${(props) =>
    props.btnType === "secondary"
      ? "#D9DBE9"
      : props.btnType === "text-btn"
      ? "none"
      : "#0058B9"};
  color: #${(props) => (props.btnType === "primary" || props.btnType === "welcome-btn" ? "FFFFFF" : "5A5A89")};
  border-radius: 10px;
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

  &:hover {
    background-color: ${(props) => {
      if (props.btnType === "text-btn") return "rgba(217, 219, 233, 0.3)";
    }};
    opacity: ${(props) => {
      if (props.btnType !== "text-btn") return 0.8;
    }};
  }
`;
