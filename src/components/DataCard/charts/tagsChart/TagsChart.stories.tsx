import { Meta, Story } from "@storybook/react";
import TagsChart, { chartProps } from "./TagsChart";

export default {
  component: TagsChart,
  title: "Components/TagsChart",
} as Meta;

const Template: Story<chartProps> = (args) => <TagsChart {...args} />;

export const DATACARD_EXAMPLE = Template.bind({});
DATACARD_EXAMPLE.args = {
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
