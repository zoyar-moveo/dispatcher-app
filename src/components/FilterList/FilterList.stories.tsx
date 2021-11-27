import { Meta, Story } from "@storybook/react";
import FilterList, { FilterListProps } from "./FilterList";

export default {
  component: FilterList,
  title: "Components/FilterList",
} as Meta;

const Template: Story<FilterListProps> = (args) => <FilterList {...args} />;

export const FilterEXP = Template.bind({});
FilterEXP.args = {
  filterData: [
    {
      Source: [
        { id: "Walla", value: "Walla" },
        { id: "Mako", value: "Mako" },
        { id: "BBC", value: "BBC" },
      ],
    },
    {
      Country: [
        { id: "USA", value: "USA" },
        { id: "Israel", value: "USA" },
        { id: "Canada", value: "Canada" },
      ],
    },
    {
      Category: [
        { id: "Politics", value: "Politics" },
        { id: "Health", value: "Health" },
        { id: "Finance", value: "Finance" },
      ],
    },
  ],
  parentFilterUpdate: (filter: string) => console.log(filter),
};
