import { Meta, Story } from "@storybook/react";
import DataCard, { DataCardProps } from "./DataCard";
import { DataTypeList } from "./DataCard";

export default {
  component: DataCard,
  title: "Components/DataCard",
} as Meta;

const Template: Story<DataCardProps> = (args) => <DataCard {...args} />;

export const SOURCES = Template.bind({});
SOURCES.args = {
  DataType: DataTypeList.sourcesChart,
};

export const DATES = Template.bind({});
DATES.args = {
  DataType: DataTypeList.datesChart,
};

export const TAGS = Template.bind({});
TAGS.args = {
  DataType: DataTypeList.tagsChart,
};
