import styled from "styled-components";

export const SearchFilterContainer = styled.div<{ isFocus: boolean }>`
  width: ${(props) => (props.isFocus ? "667px" : "423px")};
  transition: width 0.5s ease;
  @media (max-width: 800px) {
    width: 423px;
  }
  @media (max-width: 480px) {
    display: none;
  }
`;
export const SearchSubTitle = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
  padding-top: 6.5px;
  padding-bottom: 6.5px;
`;

export const FlexSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  background-color: #ffffff;
  border-radius: 10px;
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
  /* padding: 0 15px; */
  align-items: center;
`;

export const ItemText = styled.div`
  width: 100%;
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  &:hover {
    background-color: rgba(223, 224, 235, 0.41);
    cursor: pointer;
  }
`;
export const Img = styled.img`
  height: 1.125rem;
  margin-right: 17px;
  /* margin-left: 2.8px; */
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
`;
export const Resent = styled.span`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 450;
`;

export const SearchPlasholder = styled.span`
  font-size: 0.875rem;
`;
export const SeparatingLine = styled.div`
  border-right: 0.5px solid #d9dbe9;
  opacity: 0.5;
  height: 80%;
  margin: auto;
`;
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  /* background-color: #ffffff; */
  width: 100%;
  padding-left: 17.8px;
  /* border-right: 0.5px solid #d9dbe9; */

  /* padding: 0 15px; */

  & input {
    border: none;
    color: rgba(90, 90, 137, 1);
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  & input:focus,
  & select:focus {
    outline: none;
  }
  & input::placeholder {
    color: rgba(90, 90, 137, 0.5);
  }
`;
