import { Meta, Story } from "@storybook/react";
// import { FeedCardProps } from "./FeedCardProps";
import TagList, { TagListProps } from "./TagList";

export default {
  component: TagList,
  title: "Components/TagList",
} as Meta;

// args in TS way
const Template: Story<TagListProps> = (args) => <TagList {...args} />;

export const TagListExample = Template.bind({});
TagListExample.args = {};
