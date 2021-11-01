import FeedCard from "../FeedCard/FeedCard";
import { FeedCardListContainer, FeedCardListScroll } from "./styles";
import feedCardData from "../../services/feedDate";

export interface feedDataObj {
  // feedDataObj: {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
// }

const FeedCardList: React.FC<{ isMobile: boolean }> = (props) => {
  return (
    <FeedCardListScroll>
      <FeedCardListContainer>
        {feedCardData.map((val: feedDataObj, index: number) => (
          <>
            <FeedCard feedCardObj={val} isMobile={props.isMobile} key={index} />
          </>
        ))}
      </FeedCardListContainer>
    </FeedCardListScroll>
  );
};

export default FeedCardList;
