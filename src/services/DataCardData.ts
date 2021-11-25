import { DataTypeList } from "../components/DataCard/DataCard";

const sourceArgs = {
  DataType: DataTypeList.sourcesChart,
  data: {
    maintainAspectRatio: true,
    responsive: true,
    labels: ["a", "b", "c", "d"],
    datasets: [
      {
        data: [300, 50, 100, 500],
        backgroundColor: ["red", "green", "yellow", "blue"],
      },
    ],
  },
  options: {
    cutout: "80%",
    plugins: {
      legend: {
        position: "bottom",
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
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
      line: {
        backgroundColor: "#e6f2fb",
        borderColor: "blue",
        borderWidth: "10px",
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};

export { datesArgs, tagArgs, sourceArgs };
