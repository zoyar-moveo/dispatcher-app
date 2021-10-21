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
    cutout: 95,
  },
};

export const TAGS = Template.bind({});
TAGS.args = {
  DataType: DataTypeList.tagsChart,
  options: {
    indexAxis: "y",
  },
  data: {
    maintainAspectRatio: false,
    responsive: true,
    labels: ["a", "b", "c", "d"],
    datasets: [
      {
        stack: "stack1",
        xAxisID: "bar-x-axis2",
        label: "1",
        data: [20, 50, 100, 70],
        backgroundColor: ["red", "green", "yellow", "blue"],
      },
      {
        stack: "stack1",
        xAxisID: "bar-x-axis2",
        data: [80, 50, 0, 30], // for the real data: to calculate 100 - num%
        label: "2",
        backgroundColor: ["grey", "grey", "grey", "grey"],
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
};
