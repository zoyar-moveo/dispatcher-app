import { Meta, Story } from "@storybook/react";
import SearchFilter, { SearchFilterProps } from "./SearchFilter";
import SearchIcon from "./assets/search.svg";
import ForwardIcon from "./assets/Forward.svg";

export default {
  component: SearchFilter,
  title: "Components/SearchFilter",
} as Meta;

const Template: Story<SearchFilterProps> = (args) => <SearchFilter {...args} />;

export const SEARCHFILTER = Template.bind({});
SEARCHFILTER.args = {
  filterType: "Everything",
  FilterList: ["Top Headlines", "Everything"],
  SearchsList: ["Bitcoin", "Stockes", "Weather"],
  searchIcon: SearchIcon,
  forwardIcon: ForwardIcon,
};
