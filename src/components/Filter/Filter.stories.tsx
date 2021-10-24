import { Meta, Story } from "@storybook/react";
import Filter, { FilterProps } from "./Filter";

export default {
  component: Filter,
  title: "Components/Filter",
} as Meta;

const Template: Story<FilterProps> = (args) => <Filter {...args} />;

export const FilterEXP = Template.bind({});
FilterEXP.args = {
  filterType: "source",
  filtersList: [
    { id: "Walla", value: "Walla" },
    { id: "Mako", value: "Mako" },
    { id: "BBC", value: "BBC" },
  ],
  parentUpdate: (filter: string) => console.log(filter),
};
