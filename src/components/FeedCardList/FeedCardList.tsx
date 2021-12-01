import FeedCard from "../FeedCard/FeedCard";
import {
  FeedCardListContainer,
  FeedCardListScroll,
  NotFoundContainer,
  NotFoundImg,
  NotFoundText,
} from "./styles";
import feedCardData from "../../services/feedDate"; // for dummy data
import makeGetRequest, { makeGetRequestEvery } from "../../services/ApiData";
import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dataActions } from "../../store/data";
import { endPointTypes } from "../../utiles/endPoint.types";
import InfiniteScroll from "react-infinite-scroll-component";
import NotFoundSVG from "./assets/not-found.svg";

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

const FeedCardList: React.FC<{
  isMobile: boolean;
  // getData: () => void;
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
  // const data = feedCardData;
  const page: any = useSelector<any>((state) => state.data.page);
  const endPoint: any = useSelector<any>((state) => state.endPoint.endPoint);
  const [pageNumber, setPageNumber] = useState(1);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    if (filterEverything) getData(1);
    setIsScroll(false);
  }, [filterEverything]);

  useEffect(() => {
    if (filters) getData(1);
    setIsScroll(false);
  }, [filters]);

  useEffect(() => {
    getData(1);
  }, []);

  const nextData = () => {
    console.log("nextData");
    let temp = page + 1;
    console.log(temp);
    setIsScroll(true);
    dispatch(dataActions.updatePage(temp));
    setPageNumber(temp);
    // setTimeout(() => {
    getData(temp);
    // }, 2000);
  };
  const getData = useCallback(
    async (pageNumber: number) => {
      // const getData = async (pageNumber: number) => {
      console.log("getData in feedCardLIst");
      let res;
      console.log("endPoint", endPoint);
      if (endPoint === endPointTypes.TOP_HEADLINES) {
        try {
          res = await makeGetRequest(filters, endPoint, pageNumber);
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
      if (res) {
        let articles = res.data.articles;
        console.log(articles);
        // if (isScroll) {
        //   dispatch(dataActions.updateData([...data, ...articles]));
        // } else {
        // dispatch(dataActions.updateData(feedCardData));
        dispatch(dataActions.updateData(articles));
        // }
        // }
      }
    },
    [endPoint, filters, filterEverything]
  );

  return (
    <FeedCardListContainer isData={data.length > 0}>
      {data.length > 0 ? (
        <FeedCardListScroll
          id="scrollableDiv"
          isToShow={data.length > 0 ? true : false}
        >
          <InfiniteScroll
            dataLength={data.length}
            next={() => nextData()}
            // next={() => setTimeout(nextData, 3000)}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            scrollableTarget="scrollableDiv"
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {data.map((val: feedDataObj, idx: number) => (
              <FeedCard feedCardObj={val} key={idx} isMobile={props.isMobile} />
            ))}
          </InfiniteScroll>
        </FeedCardListScroll>
      ) : (
        <NotFoundContainer>
          <NotFoundImg src={NotFoundSVG} alt="" />
          <NotFoundText>
            We couldn’t find any matches for your query
          </NotFoundText>
        </NotFoundContainer>
      )}
    </FeedCardListContainer>
  );
};

export default FeedCardList;
