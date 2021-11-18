import { Doughnut } from "react-chartjs-2";

type dataSetType = {
  data: number[];
  backgroundColor: string[];
};

export interface chartProps {
  data: {
    maintainAspectRatio: boolean;
    responsive: boolean;
    labels: string[];
    datasets: dataSetType[];
  };
  options: any;
}

const SourcesChart: React.FC<chartProps> = (props) => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "60%" }}>
        <Doughnut data={props.data} options={props.options} />
      </div>
    </div>
  );
};

export default SourcesChart;
