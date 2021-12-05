import { Doughnut } from "react-chartjs-2";
import SourcesLegend from "./SourcesLegend";

type dataSetType = {
  data: number[];
  backgroundColor: string[];
};

export interface chartProps {
  data: {
    maintainAspectRatio: boolean;
    responsive: boolean;
    labels: string[];
    datasets: any;
  };
  options: any;
  articlesNum: number;
}

const SourcesChart: React.FC<chartProps> = (props) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "35%", paddingTop: "10px", paddingBottom: "15px" }}>
        <Doughnut data={props.data} options={props.options} />
      </div>
      <SourcesLegend
        labels={props.data.labels}
        dataSetData={props.data.datasets}
        articlesNum={props.articlesNum}
      />
    </div>
  );
};

export default SourcesChart;
