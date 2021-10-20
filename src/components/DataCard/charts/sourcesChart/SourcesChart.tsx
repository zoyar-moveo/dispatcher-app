import GlobalStyle from "../../../../GlobalStyles";
import { Doughnut } from "react-chartjs-2";

const options = {
  legend: {
    display: false,
    position: "right",
  },
  elements: {
    arc: {
      borderWidth: 0,
    },
  },
  cutout: 95,
};

const data = {
  maintainAspectRatio: false,
  responsive: true,
  labels: ["a", "b", "c", "d"],
  datasets: [
    {
      data: [300, 50, 100, 50],
      backgroundColor: ["red", "green", "yellow", "blue"],
    },
  ],
};

export interface chartProps {
  text: string;
}

const SourcesChart: React.FC<chartProps> = (props) => {
  return (
    <>
      <GlobalStyle />
      <Doughnut data={data} options={options} />
    </>
  );
};

export default SourcesChart;
