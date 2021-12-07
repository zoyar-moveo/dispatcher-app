import styled from "styled-components";
import { IconType } from "./Header";

export const HeaderContainer = styled.div<{}>`
  background-color: #262146;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 74px;

  @media (max-width: 480px) {
  }
`;

export const InnerSearchContainer = styled.div`
  /* width: clamp(16rem, 80vw, 70rem); */
  align-self: baseline;
  position: relative;
  z-index: 5;
  margin-top: 11px;
  width: 80vw;
  @media (max-width: 950px) {
    display: flex;
    justify-content: center;
  }
`;

export const RightSideContainer = styled.div<{}>`
  display: flex;
  align-items: center;
`;

export const LoginSignOut = styled.div`
  background-color: #ffffff;
  right: 0.5rem;
  width: 95px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  font-family: Mulish;
  font-size: 0.75rem;
  line-height: 1rem;
  letter-spacing: 0.00625rem;
  display: block;
  position: absolute;
  color: #5a5a89;
  padding: 8px;
  margin-top: -5px;
  &:hover {
    cursor: pointer;
  }
`;

export const ImgIcon = styled.img<{ icon: IconType }>`
  height: ${(props) =>
    props.icon === IconType.LOGO ? "3.125rem" : "1.625rem"};
  margin-left: 20px;
  cursor: pointer;
`;

export const InitalsBtn = styled.div`
  width: 3.125rem;
  height: 3.125rem;
  color: #ffffff;

  background-color: #0058b9;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 12px;
  &:hover {
    cursor: pointer;
  }
`;
