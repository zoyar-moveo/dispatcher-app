import styled from "styled-components";

export const LegendListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 110px;
  overflow: scroll;
`;

export const ColumnLabels = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 24px;
  margin-bottom: 11px;
`;

export const BulletTitle = styled.div`
  display: flex;
  align-items: center;
`;
export const Bullet = styled.div<{ color: string }>`
  border-radius: 50%;
  width: 5px;
  height: 5px;
  margin-right: 18px;
  background-color: ${(props) => props.color};
`;

export const Label = styled.div`
  color: rgba(3, 0, 53, 1);
  font-family: Mulish;
  font-size: 14px;
`;
export const Persents = styled.div`
  color: rgba(159, 162, 180, 1);
  font-family: Mulish;
  font-size: 15px;
`;
