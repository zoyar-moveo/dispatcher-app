import {
  Bullet,
  BulletTitle,
  ColumnLabels,
  Label,
  LegendListContainer,
  Persents,
  Row,
} from "./styles";
const ARTICLESNUM = 20;

const SourcesLegend: React.FC<{ labels: string[]; dataSetData: any }> = (
  props
) => {
  return (
    <LegendListContainer>
      {props.labels.map((label, idx) => (
        <Row key={idx}>
          <BulletTitle>
            <Bullet color={props.dataSetData[0].backgroundColor[idx]}></Bullet>
            <Label key={idx}>{label}</Label>
          </BulletTitle>
          <Persents>
            {(props.dataSetData[0].data[idx] / ARTICLESNUM) * 100}%
          </Persents>
        </Row>
      ))}
    </LegendListContainer>
  );
};
export default SourcesLegend;
