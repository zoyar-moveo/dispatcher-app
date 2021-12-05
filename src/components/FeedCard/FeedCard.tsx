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
import { btnTypeList } from "../Button/Button";
import DefaultImage from "./assets/DefaultImage.png";

export interface feedDataObj {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  source: { id: string; name: string };
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

  const redirecToLink = (url: string) => {
    window.open(url, "_blank");
  };

  const handleImgError = (ev: any) => {
    ev.target.src = DefaultImage;
  };

  return (
    <CardContainer>
      <Img
        alt=""
        src={
          feedCardObj.urlToImage === "" ||
          feedCardObj.urlToImage === "null" ||
          feedCardObj.urlToImage === null
            ? DefaultImage
            : feedCardObj.urlToImage
        }
        onError={handleImgError}
      />
      <ContentContainer>
        <FlexRowContainer>
          <CardSecondaryTitle>
            {formattedDate(feedCardObj.publishedAt)}
          </CardSecondaryTitle>
        </FlexRowContainer>
        <CardHeader>{feedCardObj.title}</CardHeader>
        <CardSecondaryTitle>{feedCardObj.source.name}</CardSecondaryTitle>
        <CardBody>{feedCardObj.description}</CardBody>
        <FlexButton>
          <Button
            btnType={btnTypeList.primary}
            onClickFunc={() => redirecToLink(feedCardObj.url)}
            isArrow={true}
            text="Navigate to dispatch"
          ></Button>
        </FlexButton>
      </ContentContainer>
    </CardContainer>
  );
};

export default FeedCard;
