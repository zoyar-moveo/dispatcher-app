import styled from "styled-components";
import { FeedCardProps } from "./FeedCardProps";

// export const StyledFeedCard = styled.div<FeedCardProps>``;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  position: static;
  width: 988px;
  height: 242px;
  left: 0px;
  top: 0px;

  /* Grayscale / White */

  background: #ffffff;
  /* Grayscale / Line */

  border: 1px solid #d9dbe9;
  /* Drop Shadow Large */

  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
`;

export const CardHeader = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  /* Bluescale / Bluish-Black */

  color: #14142b;

  /* flex: none; */
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 24px 0px;
`;

export const CardBody = styled.div``;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// /* Inside Auto Layout */

// flex: none;
// order: 0;
// align-self: stretch;
// flex-grow: 0;
// margin: 24px 0px;
