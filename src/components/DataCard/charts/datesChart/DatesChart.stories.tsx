import { Meta, Story } from "@storybook/react";
// import DatesChart from "./DatesChart";
import DatesChart, { chartProps } from "./DatesChart";

export default {
  component: DatesChart,
  title: "Components/DatesChart",
} as Meta;

const Template: Story<chartProps> = (args) => <DatesChart {...args} />;

export const DATACARD_EXAMPLE = Template.bind({});
DATACARD_EXAMPLE.args = {
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
        legend: {
          display: false,
          text: "dsds",
        },
      },
    },
  },
};
