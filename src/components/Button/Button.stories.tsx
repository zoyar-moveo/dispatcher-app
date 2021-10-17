import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  component: Button,
  title: "Components/Button",
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const WELCOME = Template.bind({});
WELCOME.args = {
  text: "text",
  btnType: "welcome-btn",
  isArrow: true,
  onClickFunc: () => {
    console.log("clicked");
  },
};

export const PRIMARY = Template.bind({});
PRIMARY.args = {
  text: "text",
  btnType: "primary",
  isArrow: true,
  onClickFunc: () => {
    console.log("clicked");
  },
};

export const SECONDARY = Template.bind({});
SECONDARY.args = {
  text: "htghghg",
  btnType: "secondary",
  isArrow: false,
  onClickFunc: () => {
    console.log("clicked");
  },
};
export const TEXT = Template.bind({});
TEXT.args = {
  text: "text",
  btnType: "text-btn",
  isArrow: false,
  onClickFunc: () => {
    console.log("clicked");
  },
};
