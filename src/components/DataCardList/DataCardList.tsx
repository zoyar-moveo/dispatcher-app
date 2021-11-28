import { datesArgs, sourceArgs } from "../../services/DataCardData";
import { getSourcesDataArgs } from "../../utiles/getGraphsArgs";
import DataCard from "./../DataCard/DataCard";
import { DataCardContainer } from "./styles";

const DataCardList: React.FC<{
  sourcesMap: { labels: string[]; dataSetData: number[] };
}> = (props) => {
  console.log("data card list");
  console.log(props.sourcesMap.labels, props.sourcesMap.dataSetData);
  return (
    <DataCardContainer>
      <DataCard
        DataType={sourceArgs.DataType}
        data={getSourcesDataArgs(props.sourcesMap).data}
        options={sourceArgs.options}
        // dataSetData={props.sourcesMap.dataSetData}
        // labels={props.sourcesMap.labels}
      />
      <DataCard
        DataType={datesArgs.DataType}
        data={datesArgs.data}
        options={datesArgs.options}
        // dataSetData={props.sourcesMap.dataSetData}
        // labels={props.sourcesMap.labels}
      />
    </DataCardContainer>
  );
};

export default DataCardList;
