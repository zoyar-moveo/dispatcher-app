import FeedCard from "../FeedCard/FeedCard";
import { FeedCardListContainer, FeedCardListScroll } from "./styles";
import feedCardData from "../../services/feedDate"; // for dummy data
import makeGetRequest, { makeGetRequestEvery } from "../../services/ApiData";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dataActions } from "../../store/data";
import { endPointTypes } from "../../utiles/endPoint.types";
import InfiniteScroll from "react-infinite-scroll-component";

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
      Sources: string;
      Country: string;
      Category: string;
    };
    filterEverything: {
      Sources: "";
      Language: "";
      Dates: [];
    };
    searchQ: string;
  };
  const dispatch = useDispatch();
  const filters: any = useSelector<TFilters>((state) => state.filter);
  const filterEverything: any = useSelector<any>(
    (state) => state.filterEverything
  );
  const data: any = useSelector<any>((state) => state.data.data);
  const endPoint: any = useSelector<any>((state) => state.endPoint.endPoint);

  useEffect(() => {});

  useEffect(() => {
    if (filters) getData();
  }, [filters]);

  useEffect(() => {
    if (filterEverything) getData();
  }, [filterEverything]);

  const getData = async () => {
    let res;
    if (endPoint === endPointTypes.TOP_HEADLINES) {
      // if (endPoint === "top-headlines") {
      try {
        res = await makeGetRequest(filters, endPoint);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        res = await makeGetRequestEvery(filterEverything);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
    if (res) dispatch(dataActions.updateData(res.data.articles));
  };

  return (
    <FeedCardListScroll>
      <FeedCardListContainer>
        <InfiniteScroll
          dataLength={data.length} //This is important field to render the next data
          next={() => getData()}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {data
            ? data.map((val: feedDataObj, idx: number) => (
                <FeedCard
                  feedCardObj={val}
                  key={idx}
                  isMobile={props.isMobile}
                />
              ))
            : "loading"}
        </InfiniteScroll>
      </FeedCardListContainer>
    </FeedCardListScroll>
  );
};

export default FeedCardList;
