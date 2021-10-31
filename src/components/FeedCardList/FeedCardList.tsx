import CardImg from "../FeedCard/assets/image.jpg";
import FeedCard from "../FeedCard/FeedCard";
import { FeedCardListContainer, FeedCardListScroll } from "./styles";

const FeedCardList: React.FC<{ isMobile: boolean }> = (props) => {
  const feedCardData: any = [
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
  ];

  return (
    <FeedCardListScroll>
      <FeedCardListContainer>
        {feedCardData.map((val: any, index: number) => (
          <FeedCard
            cardImg={feedCardData[0].urlToImage}
            author={feedCardData[0].author}
            title={feedCardData[0].title}
            description={feedCardData[0].description}
            url={feedCardData[0].url}
            urlToImage={feedCardData[0].urlToImage}
            publishedAt={feedCardData[0].publishedAt}
            content={feedCardData[0].content}
            isMobile={props.isMobile}
            key={index}
          />
        ))}
      </FeedCardListContainer>
    </FeedCardListScroll>
  );
};

export default FeedCardList;
