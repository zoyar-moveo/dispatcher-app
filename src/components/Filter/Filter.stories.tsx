import { Meta, Story } from "@storybook/react";
import Filter, { FilterProps } from "./Filter";

export default {
  component: Filter,
  title: "Components/Filter",
} as Meta;

const Template: Story<FilterProps> = (args) => <Filter {...args} />;

export const FilterEXP = Template.bind({});
FilterEXP.args = {
  filterSort: "secondary",
  filterType: "source",
  filtersList: [
    { id: "Walla", value: "Walla" },
    { id: "Mako", value: "Mako" },
    { id: "BBC", value: "BBC" },
  ],
  parentFilterUpdate: (filter: string) => {},
};

export const INNER_FILTER = Template.bind({});
INNER_FILTER.args = {
  filterSort: "inner",
  filterType: "Everything",
  filtersList: [
    { id: "Everything", value: "Everything" },
    { id: "Top Headlines", value: "Top Headlines" },
  ],
  parentFilterUpdate: (filter: string) => {},
};
