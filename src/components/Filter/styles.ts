import styled from "styled-components";

export const FiltertContainer = styled.div<{}>`
  width: 175px;
  background: #ffffff;
  border-radius: 10px;
  /* border: 1px solid black;
 */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 0.875rem;
  line-height: 1.375rem;
  letter-spacing: 0.015625rem;

  color: #5a5a89;
`;

// export const FilterSelector = styled.div<{}>``;

export const DropDownList = styled.div<{}>``;

export const DropDownItem = styled.div<{}>`
  padding: 0 0.9375rem;
  &:hover {
    background-color: rgba(223, 224, 235, 0.41);
    cursor: pointer;
  }
`;

export const CurrFilter = styled.div<{}>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  padding: 0.9375rem;
`;
