import GlobalStyle from "../../../../GlobalStyles";
import { Line } from "react-chartjs-2";

type dataSetType = {
  data: number[];
  tension: number;
  fill: {
    target: string;
    below: string;
  };
};

export interface chartProps {
  data: {
    maintainAspectRatio: boolean;
    responsive: boolean;
    labels: string[];
    datasets: dataSetType[];
  };
}

const DatesChart: React.FC<chartProps> = (props) => {
  return (
    <>
      <GlobalStyle />
      <Line data={props.data} />
    </>
  );
};

export default DatesChart;
