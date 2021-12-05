import {
  Bullet,
  BulletTitle,
  ColumnLabels,
  Label,
  LegendListContainer,
  Persents,
  Row,
} from "./styles";
const ARTICLESNUM = 10;

const SourcesLegend: React.FC<{
  labels: string[];
  dataSetData: any;
  articlesNum: number;
}> = (props) => {
  return (
    <LegendListContainer>
      {props.labels.map((label, idx) => (
        <Row key={idx}>
          <BulletTitle>
            <Bullet color={props.dataSetData[0].backgroundColor[idx]}></Bullet>
            <Label key={idx}>{label}</Label>
          </BulletTitle>
          <Persents>
            {Math.round(
              (props.dataSetData[0].data[idx] / props.articlesNum) * 100
            )}
            %
          </Persents>
        </Row>
      ))}
    </LegendListContainer>
  );
};
export default SourcesLegend;
