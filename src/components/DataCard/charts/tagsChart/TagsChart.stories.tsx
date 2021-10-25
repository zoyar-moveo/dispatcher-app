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
    plugins: {
      legend: {
        display: false,
      },
    },
    indexAxis: "y",
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
