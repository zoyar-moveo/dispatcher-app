import FeedCard from "../FeedCard/FeedCard";
import {
  FeedCardListContainer,
  NotFoundContainer,
  NotFoundImg,
  NotFoundText,
} from "./styles";
import feedCardData from "../../services/feedDate"; // for dummy data
import makeGetRequest, { makeGetRequestEvery } from "../../services/ApiData";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dataActions } from "../../store/data";
import { endPointTypes } from "../../utiles/endPoint.types";
import InfiniteScroll from "react-infinite-scroll-component";
import NotFoundSVG from "./assets/not-found.svg";
import MyLoader from "../Loaders/FeedCardLoader";

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
  const totalResults: any = useSelector<any>(
    (state) => state.data.totalResults
  );
  const page: any = useSelector<any>((state) => state.data.page);
  const isLoading: any = useSelector<any>((state) => state.data.isLoading);
  const endPoint: any = useSelector<any>((state) => state.endPoint.endPoint);
  const [pageNumber, setPageNumber] = useState(1);

  const firstUpdate = useRef(true);

  // if (firstUpdate.current) {
  //   firstUpdate.current = false;
  //   return;
  // }

  useEffect(() => {
    if (filterEverything) getData(1); // change condition
  }, [filterEverything]);

  useEffect(() => {
    if (filters) getData(1); // change condition
  }, [filters]);

  useEffect(() => {
    getData(1);
  }, []);

  const nextData = () => {
    let temp = page + 1;
    dispatch(dataActions.updatePage(temp));
    setPageNumber(temp);
    getData(temp, true);
  };
  const getData = useCallback(
    async (pageNumber: number, isScroll?: boolean) => {
      let res;
      if (endPoint === endPointTypes.TOP_HEADLINES) {
        try {
          dispatch(dataActions.updateIsLoading(true));
          res = await makeGetRequest(filters, endPoint, pageNumber);
        } catch (err: any) {
          console.log(err.response.status);
          dispatch(dataActions.updateResStatus(err.response.status));
        }
      } else {
        try {
          dispatch(dataActions.updateIsLoading(true));
          res = await makeGetRequestEvery(filterEverything);
        } catch (err: any) {
          console.log(err.response.status);
          console.log(err.response.data);
          dispatch(dataActions.updateResStatus(err.response.status));
        }
      }
      if (res) {
        let articles = res.data.articles;
        dispatch(dataActions.updateResStatus(res.data.status));
        dispatch(dataActions.updateTotalResults(res.data.totalResults));
        if (isScroll) {
          dispatch(dataActions.addData(articles));
        } else {
          dispatch(dataActions.updateData(articles));
        }
      }
      dispatch(dataActions.updateIsLoading(false));
    },
    [endPoint, filters, filterEverything]
  );

  return (
    <>
      {isLoading && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <FeedCardListContainer>
            <MyLoader />
            <MyLoader />
            <MyLoader />
          </FeedCardListContainer>
        </div>
      )}
      <FeedCardListContainer id="scrollableDiv" isData={data.length > 0}>
        {!isLoading && totalResults > 0 ? (
          <InfiniteScroll
            dataLength={data.length}
            next={() => nextData()}
            hasMore={totalResults - data.length > 10 ? true : false}
            loader={<MyLoader />}
            scrollableTarget="scrollableDiv"
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>End of results</b>
              </p>
            }
          >
            {data.map((val: feedDataObj, idx: number) => (
              <FeedCard feedCardObj={val} key={idx} isMobile={props.isMobile} />
            ))}
          </InfiniteScroll>
        ) : (
          totalResults === 0 && (
            <NotFoundContainer>
              <NotFoundImg src={NotFoundSVG} alt="" />
              <NotFoundText>
                We couldn’t find any matches for your query
              </NotFoundText>
            </NotFoundContainer>
          )
        )}
      </FeedCardListContainer>
    </>
  );
};

export default FeedCardList;
