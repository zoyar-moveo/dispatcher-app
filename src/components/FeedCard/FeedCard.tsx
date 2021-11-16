import {
  CardBody,
  CardHeader,
  ContentContainer,
  CardSecondaryTitle,
  FlexButton,
  Img,
  CardContainer,
  FlexRowContainer,
} from "./styles";
import Button from "../Button/Button";
import TagList from "../TagList/TagList";
import { btnTypeList } from "../Button/Button";

export interface feedDataObj {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface FeedCardProps {
  feedCardObj: feedDataObj;
  isMobile: boolean;
}

export interface DateFormat {
  weekday: string;
  year: string;
  month: string;
  day: string;
}

const FeedCard: React.FC<FeedCardProps> = ({ feedCardObj, isMobile }) => {
  const formattedDate = (publishedAt: string): string => {
    const dateOptions: any = {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(publishedAt).toLocaleDateString("en-US", dateOptions);
  };

  return (
    <CardContainer>
      <Img alt="" src={feedCardObj.urlToImage} />
      <ContentContainer>
        <FlexRowContainer>
          <CardSecondaryTitle>
            {formattedDate(feedCardObj.publishedAt)}
          </CardSecondaryTitle>
          <TagList
            tags={["Economy", "Israel", "USA", "news"]}
            isMobile={isMobile}
          />
        </FlexRowContainer>
        <CardHeader>{feedCardObj.title}</CardHeader>
        <CardSecondaryTitle>{feedCardObj.author}</CardSecondaryTitle>
        <CardBody>{feedCardObj.description}</CardBody>
        <FlexButton>
          <Button
            btnType={btnTypeList.primary}
            onClickFunc={() => {}}
            isArrow={true}
            text="Navigate to dispatch"
          ></Button>
        </FlexButton>
      </ContentContainer>
    </CardContainer>
  );
};

export default FeedCard;
