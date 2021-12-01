import styled from "styled-components";
import { DataTypeList } from "./DataCard";

export const CardHeader = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 10px;
`;

export const Underline = styled.div`
  background: #5a5a89;
  border: 2px solid #5a5a89;
  width: 1.25rem;
  border-radius: 5px;
`;

export const InnerContainer = styled.div<{ DataType: any }>`
  padding: 25px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const NoChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
`;

export const NoDataImg = styled.img`
  width: 133px;
  margin-bottom: 16px;
`;

export const NoDataText = styled.div`
  color: #5a5a89;
  margin-bottom: 63px;
  font-weight: 300;
  font-size: 1.125rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
