import { Meta, Story } from "@storybook/react";
import DatesChart from "./DatesChart";

export default {
  component: DatesChart,
  title: "Components/DatesChart",
} as Meta;

const Template: Story<{ text: string }> = (args) => <DatesChart {...args} />;

export const DATACARD_EXAMPLE = Template.bind({});
DATACARD_EXAMPLE.args = {
  text: "test",
};
