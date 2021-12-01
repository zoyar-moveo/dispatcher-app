import styled from "styled-components";

export const FilterContainer = styled.div<{
  filterSort: string;
  isFocus?: boolean;
  isDropDown?: boolean;
}>`
  width: ${(props) =>
    props.filterSort === "secondary"
      ? "175px"
      : props.filterSort === "inner"
      ? "max(fit-content,160px)"
      : // ? "max(fit-content,160px)"
      props.isFocus === true
      ? "667px"
      : "423px"};
  background: #ffffff;
  border-radius: 10px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 0.875rem;
  line-height: 1.375rem;
  letter-spacing: 0.015625rem;
  color: #5a5a89;
  /* height: 50px; // */
  /* height: fit-content; */
  height: ${(props) =>
    props.filterSort === "primary" ? "50px" : "fit-content"};
  padding: ${(props) => (props.filterSort === "inner" ? "0" : "0.9375rem")};
  box-shadow: ${(props) =>
    props.isDropDown === true || props.filterSort === "resent"
      ? "0px 4px 12px rgba(0, 0, 0, 0.08)"
      : "none"};
  /* box-shadow: none; */
  position: ${(props) => (props.isDropDown === true ? "absolute" : "")};
  /* position: absolute; */
  & img {
    margin-left: 0.5rem;
    margin-left: 16px;
  }

  &:not(:last-child) {
    margin-bottom: 0.625rem;
  }
  /* position: relative; */
  z-index: 3;
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
  height: ${(props) =>
    props.filterSort === "inner" ? "fit-contect" : "126px"};
  overflow: scroll;
  /* padding-right: 10px;
  padding-left: 10px;
  margin-top: 12px; */
  border-radius: 10px;
`;

export const DropDownItem = styled.div<{}>`
  font-family: Mulish;
  letter-spacing: 0.5px;
  padding-bottom: 12px;
  &:hover {
    background-color: rgba(223, 224, 235, 0.41);
    cursor: pointer;
  }
  padding-right: 10px;
  padding-left: 10px;
`;

export const CurrFilter = styled.div<{ filterType: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  width: 140px;
  & div {
    /* font-size: ${(props) =>
      props.filterType === "Dates" ? "9x" : "inherit"}; */
  }
`;
