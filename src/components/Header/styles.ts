import styled from "styled-components";
import { IconType } from "./Header";

export const HeaderContainer = styled.div<{}>`
  background-color: #262146;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RightSideContainer = styled.div<{}>`
  display: flex;
  align-items: center;
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
