import { CardContainer } from "../styledComponents/CardContainer";
import { CardHeader, Underline, InnerContainer } from "./styles";
import SourcesChart from "./charts/sourcesChart/SourcesChart";
import DatesChart from "./charts/datesChart/DatesChart";
import TagsChart from "./charts/tagsChart/TagsChart";
import NoChart from "./NoChart";
import { useSelector } from "react-redux";

export enum DataTypeList {
  sourcesChart = "Sources",
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
  const totalResults: any = useSelector<any>(
    (state) => state.data.totalResults
  );
  const data1: any = useSelector<any>((state) => state.data.data);
  const resStatus: any = useSelector<any>((state) => state.data.resStatus);
  const isData = props.data?.datasets[0].data.length > 0;
  return (
    <CardContainer isData={isData}>
      <InnerContainer DataType={props.DataType}>
        <CardHeader>{props.DataType}</CardHeader>
        <Underline />

        {totalResults > 0 && resStatus !== 400 ? (
          <>
            {props.DataType === DataTypeList.sourcesChart && (
              <SourcesChart
                data={props.data}
                options={props.options}
                articlesNum={data1.length}
              />
            )}
            {props.DataType === DataTypeList.datesChart && (
              <DatesChart data={props.data} options={props.options} />
            )}
            {props.DataType === DataTypeList.tagsChart && (
              <TagsChart data={props.data} options={props.options} />
            )}
          </>
        ) : (
          <NoChart />
        )}
      </InnerContainer>
    </CardContainer>
  );
};

export default FeedCard;
