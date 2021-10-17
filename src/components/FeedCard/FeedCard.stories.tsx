import { Meta, Story } from "@storybook/react";
import FeedCard, { FeedCardProps } from "./FeedCard";
// import { FeedCardProps } from "./FeedCardProps";
import CardImg from "./assets/image.jpg";

export default {
  component: FeedCard,
  title: "Components/FeedCard",
} as Meta;

// args in TS way
const Template: Story<FeedCardProps> = (args) => <FeedCard {...args} />;

export const CARD_EXAMPLE = Template.bind({});
CARD_EXAMPLE.args = {
  cardImg: CardImg,
  author: "Seth Weintraub",
  title:
    "Refreshed Tesla Model X with gorgeous interior delivered to customers [video]",
  description:
    "It looks like today’s the first day of deliveries for the refreshed Model X at a very small event where a handful of vehicles were delivered to new customers. Let’s take a peek inside! \n more…\nThe post Refreshed Tesla Model X with gorgeous interior delivered …",
  url: "https://electrek.co/2021/10/16/refreshed-tesla-model-x/",
  urlToImage:
    "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2021/10/Tesla-Model-X-deliveries.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
  publishedAt: "2021-10-17T04:02:05Z",
  content:
    "It looks like today’s the first day of deliveries for the refreshed Model X at a very small event where a handful of vehicles were delivered to new customers. Let’s take a peek inside! \r\nTMC Forum us… [+1192 chars]",
};
