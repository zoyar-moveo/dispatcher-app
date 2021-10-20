import { CardContainer } from "../styledComponents/CardContainer";
import { CardHeader, Underline, InnerContainer } from "./styles";
import GlobalStyle from "../../GlobalStyles";
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
}

const FeedCard: React.FC<DataCardProps> = (props) => {
  return (
    <>
      <GlobalStyle />
      <CardContainer>
        <InnerContainer>
          <CardHeader>{DataTypeList.sourcesChart}</CardHeader>
          <Underline />
          {props.DataType === DataTypeList.sourcesChart && (
            <SourcesChart text="test" />
          )}
          {props.DataType === DataTypeList.datesChart && (
            <DatesChart text="test" />
          )}
          {props.DataType === DataTypeList.tagsChart && (
            <TagsChart text="test" />
          )}
        </InnerContainer>
      </CardContainer>
    </>
  );
};

export default FeedCard;
