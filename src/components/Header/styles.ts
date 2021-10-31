import styled from "styled-components";
import { IconType } from "./Header";

export const HeaderContainer = styled.div<{}>`
  background-color: #262146;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;

  @media (max-width: 375px) {
    /* display: none; */
  }
`;

export const InnerSearchContainer = styled.div`
  width: clamp(16rem, 75vw, 70rem);
  align-self: baseline;
  position: relative;
  z-index: 5;
  margin-top: 6px;
`;

export const RightSideContainer = styled.div<{}>`
  display: flex;
  align-items: center;
`;

export const LoginSignOut = styled.div`
  background: #ffffff;
  height: 32px;
  left: 0;
  width: 95px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 0.75rem;
  line-height: 1rem;
  letter-spacing: 0.00625rem;
  display: inline-flex;
  align-items: center;
  color: #5a5a89;
  padding: 0 8px;
`;

export const ImgIcon = styled.img<{ icon: IconType }>`
  height: ${(props) =>
    props.icon === IconType.LOGO ? "3.125rem" : "1.625rem"};
  margin: 0.4375rem 0.5rem;
`;

export const InitalsBtn = styled.div`
  width: 3.125rem;
  height: 3.125rem;
  color: #ffffff;
  /* Primary / Default */

  background-color: #0058b9;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.4375rem 0.5rem;
`;
