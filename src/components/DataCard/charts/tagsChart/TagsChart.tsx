import GlobalStyle from "../../../../GlobalStyles";
import { Bar } from "react-chartjs-2";

type dataSetType = {
  stack: string;
  xAxisID: string;
  data: number[];
  label: string;
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

const TagsChart: React.FC<chartProps> = (props) => {
  return (
    <>
      <GlobalStyle />
      <Bar data={props.data} options={props.options} />
    </>
  );
};

export default TagsChart;
