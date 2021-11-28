import { LegendListContainer } from "./styles";

const SourcesLegend: React.FC<{ labels: string[] }> = (
  // const SourcesLegend: React.FC<{ labels: string[]; dataSetData: any }> = (
  props
) => {
  return (
    <LegendListContainer>
      {props.labels.map((label) => (
        <div>{label}</div>
      ))}
      {/* {props.dataSetData.map((val: any) => (
        <div>{val}</div>
      ))} */}
    </LegendListContainer>
  );
};
export default SourcesLegend;
/* <LegendListContainer>
  {doughnutData.labels?.map((label, index) => (
    <LegendContainer>
      <TitleAndBullet>
        <LegendBullet
          color={
            [
              "rgba(221, 243, 254)",
              "rgba(255, 152, 0)",
              "rgba(3, 0, 53)",
              "rgba(52, 58, 110)",
            ][index === 0 ? index : index % 4]
          }
        />
        <LegendTitle>{label}</LegendTitle>
      </TitleAndBullet>
      <LegendData>
        {(doughnutData.datasets[0].data[index] * 100) / totalSum}%
      </LegendData>
    </LegendContainer>
  ))}
</LegendListContainer>)
// } */
