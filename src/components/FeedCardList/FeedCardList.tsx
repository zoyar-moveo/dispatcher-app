import FeedCard from "../FeedCard/FeedCard";
import {
  FeedCardListContainer,
  FeedCardListScroll,
  NotFoundContainer,
  NotFoundImg,
} from "./styles";
import feedCardData from "../../services/feedDate"; // for dummy data
import makeGetRequest, { makeGetRequestEvery } from "../../services/ApiData";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dataActions } from "../../store/data";
import { endPointTypes } from "../../utiles/endPoint.types";
import NotFoundSVG from "./assets/not-found.svg";

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
    <FeedCardListScroll isToShow={data.length > 0 ? true : false}>
      <FeedCardListContainer>
        {data.length > 0 ? (
          data.map((val: feedDataObj, idx: number) => (
            <FeedCard feedCardObj={val} key={idx} isMobile={props.isMobile} />
          ))
        ) : (
          <NotFoundContainer>
            <NotFoundImg src={NotFoundSVG} alt="" />
          </NotFoundContainer>
        )}
      </FeedCardListContainer>
    </FeedCardListScroll>
  );
};

export default FeedCardList;
