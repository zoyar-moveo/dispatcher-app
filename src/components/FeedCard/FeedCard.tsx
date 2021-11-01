import {
  CardBody,
  CardHeader,
  FlexContainer,
  CardSecondaryTitle,
  FlexButton,
  Img,
  CardContainer,
  ContentContainer,
} from "./styles";
import Button from "../Button/Button";
import TagList from "../TagList/TagList";
import { btnTypeList } from "../Button/Button";

export interface FeedCardProps {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  cardImg: string;
  isMobile: boolean;
}

export interface DateFormat {
  weekday: string;
  year: string;
  month: string;
  day: string;
}

const FeedCard: React.FC<FeedCardProps> = (props) => {
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
    <>
      <CardContainer>
        <Img alt="" src={props.cardImg} />
        <FlexContainer>
          <div className="flex row space-between">
            <CardSecondaryTitle>
              {formattedDate(props.publishedAt)}
            </CardSecondaryTitle>
            <TagList
              tags={["Economy", "Israel", "USA", "news"]}
              isMobile={props.isMobile}
            />
          </div>
          <ContentContainer>
            <CardHeader>{props.title}</CardHeader>
            <CardSecondaryTitle>{props.author}</CardSecondaryTitle>
            <CardBody>{props.content}</CardBody>
            <FlexButton>
              <Button
                btnType={btnTypeList.primary}
                onClickFunc={() => {}}
                isArrow={true}
                text="Navigate to dispatch"
              ></Button>
            </FlexButton>
          </ContentContainer>
        </FlexContainer>
      </CardContainer>
    </>
  );
};

export default FeedCard;
