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
    // <div style={{ width: "300px", height: "300px" }}>
    <div>
      <Doughnut data={props.data} options={props.options} />
    </div>
  );
};

export default SourcesChart;
