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
import { update } from "lodash";

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
  updateTitle?: (title: string) => void;
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
  const resStatus: any = useSelector<any>((state) => state.data.resStatus);
  const isLoading: any = useSelector<any>((state) => state.data.isLoading);
  const endPoint: any = useSelector<any>((state) => state.endPoint.endPoint);
  const [pageNumber, setPageNumber] = useState(0);
  const [gettingNextData, setGettingNextData] = useState(false);

  useEffect(() => {
    setPageNumber(1);
    getData(1);
  }, [endPoint, filters, filterEverything]);
  // }, [filters, filterEverything]);

  // useEffect(() => {
  //   getData(1);
  // }, []);
  const isTopIsraerl = (filters: any) => {
    return (
      filters.filter.Category === "" &&
      filters.filter.Sources === "" &&
      filters.filter.Country === "il"
    );
  };

  const nextData = () => {
    let temp = pageNumber + 1;
    // dispatch(dataActions.updatePage(temp));
    setPageNumber(temp);
    setGettingNextData(true); /// net sure
    getData(temp, true);
  };
  const getData = useCallback(
    async (pageNumber: number, isScroll?: boolean, filterts?: any) => {
      let res;
      // console.log("get data, endPoint:", endPoint);
      if (endPoint === endPointTypes.TOP_HEADLINES) {
        try {
          if (isScroll === undefined || isScroll === false) {
            dispatch(dataActions.updateIsLoading(true));
          }
          res = await makeGetRequest(filters, endPoint, pageNumber);
          if (res.status === 200) {
            // isTopIsraerl(filters)
            //   ? dispatch(dataActions.updateTitle("Top Headlines in Israel"))
            //   : dispatch(
            //       dataActions.updateTitle(
            //         res.data.totalResults + " Total Results"
            //       )
            //     );
            if (isTopIsraerl(filters)) {
              props.updateTitle!("Top Headlines in Israel");
            } else props.updateTitle!(res.data.totalResults + " Total Results");
          }
          // / try catch
        } catch (err: any) {
          console.log(err.response.status);
          dispatch(dataActions.updateResStatus(err.response.status));
        }
      } else {
        try {
          if (!isScroll) dispatch(dataActions.updateIsLoading(true));
          res = await makeGetRequestEvery(filterEverything, pageNumber);
          if (res.status === 200) {
            props.updateTitle!(res.data.totalResults + " Total Results");
          }
        } catch (err: any) {
          console.log(err.response.status);
          console.log(err.response.data);
          dispatch(dataActions.updateResStatus(err.response.status));
        }
      }
      if (res) {
        let articles = res.data.articles;
        dispatch(dataActions.updateResStatus(res.status));
        dispatch(dataActions.updateTotalResults(res.data.totalResults));
        if (isScroll) {
          dispatch(dataActions.addData(articles));
          dispatch(dataActions.updateIsLoading(false));
        } else {
          dispatch(dataActions.updateData(articles));
        }
      }
      dispatch(dataActions.updateIsLoading(false));
    },
    [endPoint, filters, filterEverything]
  );

  if (isLoading) {
    return (
      <FeedCardListContainer>
        <MyLoader />
        <MyLoader />
        <MyLoader />
      </FeedCardListContainer>
    );
  }
  return (
    <>
      <FeedCardListContainer id="scrollableDiv" isData={data.length > 0}>
        {totalResults > 0 && resStatus === 200 ? (
          <InfiniteScroll
            dataLength={data.length}
            next={() => nextData()}
            hasMore={totalResults - data.length > 0 ? true : false}
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
          ((resStatus === 200 && totalResults === 0) ||
            resStatus === 400 ||
            resStatus === 429 ||
            resStatus === 401) && (
            <NotFoundContainer>
              <NotFoundImg src={NotFoundSVG} alt="" />
              <NotFoundText>
                {resStatus === 400
                  ? "Ooops.. You Should choose parametrs to get relevant articles"
                  : resStatus === 429
                  ? "Too many requests are made in a given amount of time "
                  : resStatus === 401
                  ? "Api Key not valid"
                  : "We couldn’t find any matches for your query"}
              </NotFoundText>
            </NotFoundContainer>
          )
        )}
      </FeedCardListContainer>
    </>
  );
};

export default FeedCardList;
