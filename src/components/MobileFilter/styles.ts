import styled from "styled-components";

export const MobileFilterContainer = styled.div<{}>`
  width: 70vw;
  background-color: #ffffff;
  margin: 0;
  position: fixed;
  height: 100vh;
  z-index: 7;
  right: 0;
  color: rgba(90, 90, 137, 1);
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FilterTitle = styled.div<{}>`
  text-transform: uppercase;
  font-weight: 500px;
  font-size: 1rem;
  line-height: 1.375rem;
  padding-left: 10px;
  height: 74px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d9dbe9;
`;

export const ListArea = styled.div<{}>``;

export const Overlay = styled.div`
  background-color: #000000a8;
  width: 30vw;
  margin: 0;
  display: inline-block;
  position: fixed;
  height: 100vh;
  z-index: 6;
`;

export const CategoryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  border-bottom: 1px solid #d9dbe9;
  font-size: 0.875rem;
  padding: 0 16px;
  font-weight: 300;
  &:hover {
    background-color: rgba(223, 224, 235, 0.41);
    cursor: pointer;
  }
`;

export const BtnContiner = styled.div`
  margin: 10px;
  background-color: #f8f8ff;
`;
