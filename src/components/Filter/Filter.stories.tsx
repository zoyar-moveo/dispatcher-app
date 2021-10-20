import { Meta, Story } from "@storybook/react";
import Filter, { FilterProps } from "./Filter";

export default {
  component: Filter,
  title: "Components/Filter",
} as Meta;

const Template: Story<FilterProps> = (args) => <Filter {...args} />;

export const FilterEXP = Template.bind({});
FilterEXP.args = {
  text: "text",
  filterType: "source",
  filtersList: ["Walla", "Mako", "BBC"],
};
