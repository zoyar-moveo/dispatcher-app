import FeedCard from "../FeedCard/FeedCard";
import { FeedCardListContainer, FeedCardListScroll } from "./styles";
import feedCardData from "../../services/feedDate"; // for dummy data
import makeGetRequest from "../../services/ApiData";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dataActions } from "../../store/data";

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
}> = (props) => {
  type TFilters = {
    filter: {
      Source: string;
      Country: string;
      Category: string;
    };
  };
  const dispatch = useDispatch();
  const filters: any = useSelector<TFilters>((state) => state.filter);
  const data: any = useSelector<any>((state) => state.data.data);

  useEffect(() => {
    if (filters) getData();
  }, [filters]);

  const getData = async () => {
    let res = await makeGetRequest(filters);
    dispatch(dataActions.updateData(res.data.articles));
  };

  return (
    <FeedCardListScroll>
      <FeedCardListContainer>
        {data
          ? data.map((val: feedDataObj, idx: number) => (
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
