import { CardContainer } from "../styledComponents/CardContainer";
import { CardHeader, Underline, InnerContainer } from "./styles";
import SourcesChart from "./charts/sourcesChart/SourcesChart";
import DatesChart from "./charts/datesChart/DatesChart";
import TagsChart from "./charts/tagsChart/TagsChart";

export enum DataTypeList {
  sourcesChart = "sources",
  datesChart = "Dates",
  tagsChart = "Tags",
}

export interface DataCardProps {
  DataType:
    | DataTypeList.sourcesChart
    | DataTypeList.datesChart
    | DataTypeList.tagsChart;
  data: any;
  options: any;
}

const FeedCard: React.FC<DataCardProps> = (props) => {
  return (
    <CardContainer>
      <InnerContainer>
        <CardHeader>{props.DataType}</CardHeader>
        <Underline />
        {props.DataType === DataTypeList.sourcesChart && (
          <SourcesChart data={props.data} options={props.options} />
        )}
        {props.DataType === DataTypeList.datesChart && (
          <DatesChart data={props.data} options={props.options} />
        )}
        {props.DataType === DataTypeList.tagsChart && (
          <TagsChart data={props.data} options={props.options} />
        )}
      </InnerContainer>
    </CardContainer>
  );
};

export default FeedCard;
