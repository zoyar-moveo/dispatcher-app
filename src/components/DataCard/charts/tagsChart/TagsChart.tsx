import GlobalStyle from "../../../../GlobalStyles";
import { Bar } from "react-chartjs-2";

var options = {
  indexAxis: "y",
  scales: {
    xAxes: [
      {
        stacked: true,
        id: "bar-x-axis1",
      },
      {
        stacked: true,
        id: "bar-x-axis2",
        type: "category",
        categoryPercentage: 0.8,
        barPercentage: 0.9,
        ticks: {
          beginAtZero: true,
        },
        gridLines: {
          offsetGridLines: true,
        },
      },
    ],
  },
};

const arbitraryStackKey = "stack1";

const data = {
  maintainAspectRatio: false,
  responsive: true,
  labels: ["a", "b", "c", "d"],
  datasets: [
    {
      stack: arbitraryStackKey,
      xAxisID: "bar-x-axis2",
      label: "1",
      data: [20, 50, 100, 70],
      backgroundColor: ["red", "green", "yellow", "blue"],
    },
    {
      stack: arbitraryStackKey,
      xAxisID: "bar-x-axis2",
      data: [80, 50, 0, 30], // for the real data: to calculate 100 - num%
      label: "2",
      backgroundColor: ["grey", "grey", "grey", "grey"],
    },
  ],
};

export interface chartProps {
  text: string;
}

const TagsChart: React.FC<chartProps> = (props) => {
  return (
    <>
      <GlobalStyle />
      <Bar data={data} options={options} />
    </>
  );
};

export default TagsChart;
