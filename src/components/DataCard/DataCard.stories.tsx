import { Meta, Story } from "@storybook/react";
import DataCard, { DataCardProps } from "./DataCard";
import { DataTypeList } from "./DataCard";

export default {
  component: DataCard,
  title: "Components/DataCard",
} as Meta;

const Template: Story<DataCardProps> = (args) => <DataCard {...args} />;

export const SOURCES = Template.bind({});
SOURCES.args = {
  DataType: DataTypeList.sourcesChart,
  data: {
    maintainAspectRatio: false,
    responsive: true,
    labels: ["a", "b", "c", "d"],
    datasets: [
      {
        data: [300, 50, 100, 50],
        backgroundColor: ["red", "green", "yellow", "blue"],
      },
    ],
  },
  options: {
    cutout: 120,
    plugins: { legend: { position: "bottom" } },
  },
};

export const TAGS = Template.bind({});
TAGS.args = {
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
    maintainAspectRatio: false,
    responsive: true,
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

export const DATES = Template.bind({});
DATES.args = {
  DataType: DataTypeList.datesChart,
  data: {
    maintainAspectRatio: false,
    responsive: true,
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
