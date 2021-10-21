import GlobalStyle from "../../../../GlobalStyles";
import { Doughnut } from "react-chartjs-2";
import * as chartjs from "chart.js";

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
    <>
      <GlobalStyle />
      <Doughnut data={props.data} options={props.options} />
    </>
  );
};

export default SourcesChart;
