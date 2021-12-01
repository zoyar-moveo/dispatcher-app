import { DataTypeList } from "../components/DataCard/DataCard";

const getDatesDataArgs: any = (datesMap: any) => {
  return {
    data: {
      labels: datesMap.months,
      datasets: [
        {
          data: datesMap.dataSetData,
          pointRadius: 1,
          backgroundColor: "rgba(0, 185, 255, 0.2)",
          borderColor: "blue",
        },
      ],
    },
  };
};

const getSourceName = (fullName: string) => {
  return fullName.split("." || "/" || " /")[0];
};

const getSourcesDataArgs = (sourcesMap: {
  labels: string[];
  dataSetData: number[];
}): any => {
  const labels = sourcesMap?.labels.map((label) => getSourceName(label)) || [];
  return {
    data: {
      maintainAspectRatio: true,
      responsive: true,
      labels: labels,
      // labels: sourcesMap?.labels,
      datasets: [
        {
          data: sourcesMap?.dataSetData,
          backgroundColor: [
            "#FF9800",
            "#030035",
            "#E8E8E8",
            "#343A6E",
            "#DDF3FE",
            "#f5dbb3",
            "#f8f8ff",
            "#5a5962",
            "#5773b8",
            "##dccfc5",
          ],
        },
      ],
    },
  };
};

export { getSourcesDataArgs, getDatesDataArgs };
