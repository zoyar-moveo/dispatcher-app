import styled from "styled-components";

export const SearchFilterContainer = styled.div<{ isFocus: boolean }>`
  /* padding: 0 15px; */

  /* width: ${(props) => (props.isFocus ? "667px" : "300px")}; // not working */
  width: 667px;
  @media (max-width: 480px) {
    display: none;
  }
`;
export const SearchSubTitle = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
`;

export const FlexSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InnerFilter = styled.div`
  display: flex;
  flex-direction: row;
  & img {
    margin-left: 0.5rem;
  }
`;

export const DropDownItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  align-items: center;
`;

export const ItemText = styled.div`
  width: 100%;
  &:hover {
    background-color: rgba(223, 224, 235, 0.41);
    cursor: pointer;
  }
`;
export const Img = styled.img`
  height: 1.125rem;
  margin-right: 0.3125rem;
`;

export const ExitImg = styled.img`
  height: 0.75rem;
  align-self: center;
  &:hover {
    cursor: pointer;
    height: 1rem;
  }
`;

export const ClearBtn = styled.span`
  &:hover {
    cursor: pointer;
  }
`;

export const SearchPlasholder = styled.span`
  font-size: 0.875rem;
  color: rgba(90, 90, 137, 0.5);
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  padding: 0 15px;

  & input {
    border: none;
  }
`;
