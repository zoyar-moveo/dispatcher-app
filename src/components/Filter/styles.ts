import styled from "styled-components";

export const FilterContainer = styled.div<{ filterSort: string }>`
  max-width: ${(props) =>
    props.filterSort === "secondary"
      ? "175px"
      : props.filterSort === "inner"
      ? "fit-content"
      : "423px"};
  background: #ffffff;
  border-radius: 10px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 0.875rem;
  line-height: 1.375rem;
  letter-spacing: 0.015625rem;
  color: #5a5a89;
  height: fit-content;
  padding: ${(props) => (props.filterSort === "inner" ? "0" : "0.9375rem")};
  & img {
    margin-left: 0.5rem;
  }

  &:not(:last-child) {
    margin-bottom: 0.625rem;
  }
  position: relative;
  z-index: 3;
`;

export const MainFilterContainer = styled.div<{}>`
  &:not(:last-child) {
    margin-right: 0.625rem;
  }
`;

export const DropDownList = styled.div<{}>`
  height: 50px;
  overflow: scroll;
  padding-right: 10px;
`;

export const DropDownItem = styled.div<{}>`
  &:hover {
    background-color: rgba(223, 224, 235, 0.41);
    cursor: pointer;
  }
  padding-right: 10px;
`;

export const CurrFilter = styled.div<{}>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`;
