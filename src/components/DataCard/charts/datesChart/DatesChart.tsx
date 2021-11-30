import { Line } from "react-chartjs-2";

type dataSetType = any;
// data: number[];
// tension: number;
// backgroudColor: string;
// fill: {
//   target: string;
//   below: string;
// };
// };

export interface chartProps {
  data: {
    maintainAspectRatio: boolean;
    responsive: boolean;
    labels: string[];
    datasets: any;
  };
  options: any;
}

const DatesChart: React.FC<chartProps> = (props) => {
  return (
    <div style={{ paddingTop: "88px" }}>
      <Line data={props.data} options={props.options} />
    </div>
  );
};

export default DatesChart;
