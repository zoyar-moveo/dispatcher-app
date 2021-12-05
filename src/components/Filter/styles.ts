import styled, { css } from "styled-components";

export const FilterContainer = styled.div<{
  filterSort: string;
  filterTitle?: boolean;
  isFocus?: boolean;
  isDropDown?: boolean;
  isDisabled?: boolean;
}>`
  width: ${(props) =>
    props.filterSort === "secondary"
      ? "175px"
      : props.filterSort === "inner"
      ? "max(fit-content,160px)"
      : props.isFocus === true
      ? "667px"
      : props.filterSort === "resent"
      ? "100%"
      : "423px"};
  background-color: #ffffff;
  border-radius: 10px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 0.875rem;
  line-height: 1.375rem;
  letter-spacing: 0.015625rem;
  color: #5a5a89;
  @media (max-width: 800px) {
    width: ${(props) => (props.filterSort === "resent" ? "423px" : "")};
  }
  /* height: 50px; // */
  /* height: fit-content; */
  /* height: ${(props) =>
    props.filterSort === "primary" ? "50px" : "fit-content"}; */
  /* padding: ${(props) =>
    props.filterSort === "inner"
      ? // props.filterSort === "inner" || props.filterSort === "secondary"
        "0"
      : "0.9375rem"}; */
  padding: ${(props) =>
    props.filterTitle || props.filterSort === "resent" ? "12.5px 15px" : "0"};
  box-shadow: ${(props) =>
    props.isDropDown === true || props.filterSort === "resent"
      ? "0px 4px 12px rgba(0, 0, 0, 0.08)"
      : "none"};
  position: relative;
  margin-top: ${(props) => (props.filterSort === "resent" ? "6px" : "")};

  & img {
    margin-left: 0.5rem;
    margin-left: 16px;
  }

  &:not(:last-child) {
    margin-bottom: 0.625rem;
  }
  z-index: 3;
  ${(props) =>
    props.isDisabled &&
    css`
      pointer-events: none;
      background: rgba(0, 0, 0, 0.08);
      opacity: 0.6;
      cursor: not-allowed;
    `}
`;

export const MainFilterContainer = styled.div<{}>`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const FilterTitle = styled.div<{ filterSort: string }>`
  font-weight: ${(props) => (props.filterSort === "inner" ? 500 : 350)};
`;

export const DropDownList = styled.div<{ filterSort: string }>`
  /* height: ${(props) =>
    props.filterSort === "inner" ? "fit-contect" : "126px"}; */
  max-height: 126px;

  overflow: scroll;
  /* padding-right: 10px;
  padding-left: 10px;
  margin-top: 12px; */
  border-radius: 10px;
  margin-top: 9px;
`;

export const DropDownItem = styled.div<{ isChosenFilter?: boolean }>`
  font-family: Mulish;
  letter-spacing: 0.5px;
  &:hover {
    background-color: rgba(223, 224, 235, 0.41);
    cursor: pointer;
  }
  padding-right: 10px;
  padding-left: 15px;
  padding-top: 3.5px;
  padding-bottom: 3.5px;
  font-size: 12px;
  &:last-child {
    margin-bottom: 7px;
  }
  &:first-child {
    margin-top: 6px;
  }
  background-color: ${(props) =>
    props.isChosenFilter ? "rgba(223, 224, 235, 0.41)" : ""};
`;

export const CurrFilter = styled.div<{
  filterType: string;
}>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  width: 140px;
  /* padding-left: 22.5px; */
  & div {
    /* font-size: ${(props) =>
      props.filterType === "Dates" ? "9x" : "inherit"}; */
  }
`;
