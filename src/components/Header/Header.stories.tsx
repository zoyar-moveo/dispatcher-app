import { Meta, Story } from "@storybook/react";
import Header, { HeaderProps } from "./Header";
import SettingsIcon from "./assets/settings.svg";
import NotificationsIcon from "./assets/notifications.svg";
import LogoIcon from "./assets/LOGO1.svg";

export default {
  component: Header,
  title: "Components/Header",
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const HEADER_EXP = Template.bind({});
HEADER_EXP.args = {
  text: "text",
  logo: LogoIcon,
  settings: SettingsIcon,
  notifications: NotificationsIcon,
  userName: "Zoya",
};
