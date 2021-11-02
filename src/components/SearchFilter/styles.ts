import styled from "styled-components";

export const SearchFilterContainer = styled.div`
  /* width: 28.125rem; */
  /* align-self: baseline; */

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
  &:hover {
    background-color: rgba(223, 224, 235, 0.41);
    cursor: pointer;
  }
  display: flex;
  justify-content: space-between;
`;

export const Img = styled.img`
  height: 1.125rem;
  margin-right: 0.3125rem;
`;

export const SearchPlasholder = styled.span`
  font-size: 0.875rem;
  color: rgba(90, 90, 137, 0.5);
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  & input {
    border: none;
  }
`;
