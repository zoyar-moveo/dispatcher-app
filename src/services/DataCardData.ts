import { DataTypeList } from "../components/DataCard/DataCard";

const sourceArgs = {
  DataType: DataTypeList.sourcesChart,
  data: {
    maintainAspectRatio: true,
    responsive: true,
    labels: ["a", "b", "c", "d"],
    datasets: [
      {
        data: [],
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
    cutout: "80%",
    plugins: {
      legend: {
        display: false,
        labels: {
          usePointStyle: true,
          font: {
            size: 10,
          },
        },
      },
    },
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
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
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
    labels: [],
    datasets: [
      {
        data: [],
        tension: 0.5,
        backgroundColor: "rgba(0, 185, 255, 0.2)",

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
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: true,
        },
      },
      y: {
        display: false,
        beginAtZero: true,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
    tension: 0.5,
    fill: {
      target: "origin",
    },
  },
};

export { datesArgs, tagArgs, sourceArgs };
