import { Meta, Story } from "@storybook/react";
import SourcesChart from "./SourcesChart";

export default {
  component: SourcesChart,
  title: "Components/SourcesChart",
} as Meta;

const Template: Story<{ text: string }> = (args) => <SourcesChart {...args} />;

export const DATACARD_EXAMPLE = Template.bind({});
DATACARD_EXAMPLE.args = {
  text: "test",
};
