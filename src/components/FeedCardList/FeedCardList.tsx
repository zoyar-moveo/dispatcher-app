import FeedCard from "../FeedCard/FeedCard";
import { FeedCardListContainer, FeedCardListScroll } from "./styles";
import feedCardData from "../../services/feedDate";
import makeGetRequest from "../../services/ApiData";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export interface feedDataObj {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

const FeedCardList: React.FC<{
  isMobile: boolean;
  getData: () => void;
  data: any;
}> = (props) => {
  // const [data, setData] = useState<any>();
  const filters = useSelector<{
    filter: {
      Source: string;
      Country: string;
      Category: string;
    };
  }>((state) => state.filter);

  useEffect(() => {
    if (filters) props.getData();
  }, [filters]);

  // const getData = async () => {
  //   let res = await makeGetRequest(filters);
  //   setData(res.data);
  // };

  return (
    <FeedCardListScroll>
      <FeedCardListContainer>
        {props.data
          ? props.data.articles.map((val: feedDataObj, idx: number) => (
              // {feedCardData.map((val: feedDataObj, idx: number) => (
              <>
                <FeedCard
                  feedCardObj={val}
                  key={idx}
                  isMobile={props.isMobile}
                />
              </>
            ))
          : "loading"}
      </FeedCardListContainer>
    </FeedCardListScroll>
  );
};

export default FeedCardList;
