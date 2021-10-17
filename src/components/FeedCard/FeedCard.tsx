import { CardBody, CardContainer, CardHeader, FlexContainer } from "./styles";
// import { FeedCardProps } from "./FeedCardProps";
import Button from "../Button/Button";

export interface FeedCardProps {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  cardImg: string;
  //   onClickFuncy: () => void;
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
    <CardContainer>
      <img src={props.cardImg} />
      <FlexContainer>
        <div>{formattedDate(props.publishedAt)}</div>
        <CardHeader>{props.title}</CardHeader>
        <div>{props.author}</div>
        <CardBody>{props.content}</CardBody>
        <Button
          btnType="primary"
          onClickFunc={() => console.log("clicked")}
          isArrow={true}
          text="Navigate to dispatch"
        ></Button>
      </FlexContainer>
    </CardContainer>
  );
};

export default FeedCard;
