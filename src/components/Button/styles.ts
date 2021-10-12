import styled from "styled-components";

export const StyledButton = styled.button`
  /* Primary / Default */

  background: #0058b9;
  border-radius: 20px;
  border: none;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;

  position: static;
  width: 70px;
  left: calc(50% - 70px / 2 - 12px);
  top: 13.89%;
  bottom: 13.89%;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 26px;
  /* identical to box height, or 186% */

  display: flex;
  align-items: center;
  letter-spacing: 0.25px;
  text-transform: uppercase;

  /* Grayscale / White */

  color: #ffffff;
`;
