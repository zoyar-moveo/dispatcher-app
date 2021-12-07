import styled from "styled-components";

export const SortByFilterRowContainer = styled.div<{ isEverything: boolean }>`
  display: flex;
  justify-content: ${(props) =>
    props.isEverything ? "space-between" : "flex-end"};
  padding: 0px 20px; //
  /* padding: 12px 20px;  */
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #d9dbe9;
  background: #ffffff;
  margin-bottom: 12px;
  height: 51px; //
`;

export const IconBtn = styled.img<{ IconType: string }>`
  width: ${(props) => (props.IconType === "filter" ? "1.75rem" : "1rem")};
  margin-left: ${(props) => (props.IconType === "forward" ? "8px" : "0")};
  cursor: pointer;
`;

export const SortByArea = styled.div`
  color: rgba(90, 90, 137, 1);
`;
