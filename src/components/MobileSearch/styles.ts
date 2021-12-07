import styled from "styled-components";

export const MobileSearchContainer = styled.div<{ isHeaderActive?: boolean }>`
  height: ${(props) => (props.isHeaderActive ? "fit-content" : "100vh")};
`;

export const RecentSearchesArea = styled.div<{}>`
  & > div {
    color: rgba(90, 90, 137, 1);
    height: 56px;
  }
  background-color: #f8f8ff;
  height: 100%;
`;

export const SearchRow = styled.div<{}>`
  border: 1px solid #d9dbe9;
  background: #ffffff;
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
  height: 74px;
  /* padding: 0 15px; */
  display: flex;
  align-items: center;
  & input {
    width: 90%;
    border: none;
  }
  & input:focus,
  & select:focus {
    outline: none;
  }
`;

export const SearchInput = styled.div<{}>`
  width: 100%;
  padding: 20px 0;
  margin-right: 20px;
`;

export const DeleteBtn = styled.img`
  height: 1.125rem;
  width: 1.125rem;
  margin-right: 20px;
`;

export const SearchBtn = styled.img`
  height: 24px;
  margin-right: 20px;
`;

export const SearchSubtitle = styled.div<{}>`
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500px;
  padding: 0 10px;
`;

export const ClearBtn = styled.span<{}>`
  font-size: 0.75rem;
  border: none;
  background-color: rgba(217, 219, 233, 1);
  padding: 4px 6px;
`;

export const ResentSearch = styled.span<{}>`
  font-size: 0.875rem;
`;

export const ResentList = styled.div<{}>``;

export const ResentSearchItem = styled.div<{}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 42px;
  border-bottom: 1px solid #d9dbe9;
  padding: 0 10px;
`;

export const SearchKey = styled.span<{}>`
  font-size: 0.875rem;
  letter-spacing: 0.25px;
  line-height: 22px;
`;

export const ExitImg = styled.img<{}>`
  width: 0.723125rem;
  height: 0.723125rem;
  cursor: pointer;
`;

export const BackImg = styled.img<{}>`
  height: 1.25rem;
  cursor: pointer;
  margin-left: 9px;
  margin-right: 16px;
`;
