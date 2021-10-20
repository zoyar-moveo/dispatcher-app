import { Meta, Story } from "@storybook/react";
import TagsChart from "./TagsChart";

export default {
  component: TagsChart,
  title: "Components/TagsChart",
} as Meta;

const Template: Story<{ text: string }> = (args) => <TagsChart {...args} />;

export const DATACARD_EXAMPLE = Template.bind({});
DATACARD_EXAMPLE.args = {
  text: "test",
};
