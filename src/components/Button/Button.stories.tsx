import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from "./Button";
import { btnTypeList } from "./Button";

export default {
  component: Button,
  title: "Components/Button",
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const WELCOME = Template.bind({});
WELCOME.args = {
  text: "text",
  btnType: btnTypeList.welcomeBtn,
  isArrow: true,
  onClickFunc: () => {},
};

export const PRIMARY = Template.bind({});
PRIMARY.args = {
  text: "text",
  btnType: btnTypeList.primary,
  isArrow: true,
  onClickFunc: () => {},
};

export const SECONDARY = Template.bind({});
SECONDARY.args = {
  text: "text",
  btnType: btnTypeList.secondary,
  isArrow: false,
  onClickFunc: () => {},
};
export const TEXT = Template.bind({});
TEXT.args = {
  text: "text",
  btnType: btnTypeList.textBtn,
  isArrow: false,
  onClickFunc: () => {},
};
