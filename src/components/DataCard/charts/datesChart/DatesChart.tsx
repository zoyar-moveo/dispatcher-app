import GlobalStyle from "../../../../GlobalStyles";
import { Line } from "react-chartjs-2";

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
};

const data = {
  maintainAspectRatio: false,
  responsive: true,
  labels: ["a", "b", "c", "d"],
  datasets: [
    {
      data: [300, 50, 100, 50],
      tension: 1,
      // pointBackgroundColor: true,
      fill: {
        target: "origin",
        below: "rgb(60, 60, 190)", // And blue below the origin
      },
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
      <Line data={data} options={options} />
    </>
  );
};

export default SourcesChart;
