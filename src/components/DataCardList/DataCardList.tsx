import DataCard, { DataTypeList } from "./../DataCard/DataCard";
import { DataCardContainer } from "./styles";

const DataCardList: React.FC = () => {
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
      // cutout: 90,
      plugins: { legend: { position: "bottom" } },
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

  return (
    <DataCardContainer>
      <DataCard
        DataType={sourceArgs.DataType}
        data={sourceArgs.data}
        options={sourceArgs.options}
      />
      <DataCard
        DataType={tagArgs.DataType}
        data={tagArgs.data}
        options={tagArgs.options}
      />
      <DataCard
        DataType={datesArgs.DataType}
        data={datesArgs.data}
        options={datesArgs.options}
      />
    </DataCardContainer>
  );
};

export default DataCardList;
