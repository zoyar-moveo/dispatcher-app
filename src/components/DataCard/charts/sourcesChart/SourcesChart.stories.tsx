import { Meta, Story } from "@storybook/react";
import SourcesChart, { chartProps } from "./SourcesChart";

export default {
  component: SourcesChart,
  title: "Components/SourcesChart",
} as Meta;

const Template: Story<chartProps> = (args) => <SourcesChart {...args} />;

export const DATACARD_EXAMPLE = Template.bind({});
DATACARD_EXAMPLE.args = {
  data: {
    maintainAspectRatio: false,
    responsive: false,
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
