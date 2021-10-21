import { Meta, Story } from "@storybook/react";
import TagList, { TagListProps } from "./TagList";

export default {
  component: TagList,
  title: "Components/TagList",
} as Meta;

const Template: Story<TagListProps> = (args) => <TagList {...args} />;

export const TagListExample = Template.bind({});
TagListExample.args = {
  tags: ["Economy", "Israel", "USA", "news"],
};
