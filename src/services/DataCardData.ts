import { DataTypeList } from "../components/DataCard/DataCard";

const sourceArgs = {
  DataType: DataTypeList.sourcesChart,
  data: {
    maintainAspectRatio: true,
    responsive: true,
    labels: ["a", "b", "c", "d"],
    datasets: [
      {
        data: [300, 50, 100, 500, 40],
        backgroundColor: [
          "#FF9800",
          "#030035",
          "#E8E8E8",
          "#343A6E",
          "#DDF3FE",
        ],
      },
    ],
  },
  options: {
    cutout: "85%",
    plugins: { legend: { display: false } },
  },
};

const tagArgs = {
  DataType: DataTypeList.tagsChart,
  options: {
    indexAxis: "y",
    plugins: {
      legend: {
        display: false,
      },
    },
  },
  data: {
    labels: ["a", "b", "c", "d"],
    datasets: [
      {
        data: [20, 50, 100, 70],
        backgroundColor: ["blue", "blue", "blue", "blue"],
        borderRadius: [30, 30, 30, 30],
      },
    ],
  },
};

const datesArgs = {
  DataType: DataTypeList.datesChart,
  data: {
    labels: ["a", "b", "c", "d"],
    datasets: [
      {
        data: [300, 50, 100, 50],
        tension: 1,
        fill: {
          target: "origin",
          below: "rgb(60, 60, 190)", // And blue below the origin
        },
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};

export { datesArgs, tagArgs, sourceArgs };
