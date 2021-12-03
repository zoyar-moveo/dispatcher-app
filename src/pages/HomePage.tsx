import GlobalStyles from "../GlobalStyles";
import { useCallback } from "react";
import Header from "../components/Header/Header";
import LogoIcon from "../components/Header/assets/LOGO1.svg";
import SettingsIcon from "../components/Header/assets/settings.svg";
import NotificationsIcon from "../components/Header/assets/notifications.svg";
import SearchIcon from "../components/Header/assets/search.svg";
import FilterList from "../components/FilterList/FilterList";
import {
  FeedDataContainer,
  FeedDataMainContainer,
  HomePageContainer,
  InnerHomeContainer,
  SeparetorLine,
  Title,
} from "./styles";
import FeedCardList from "../components/FeedCardList/FeedCardList";
import DataCardList from "../components/DataCardList/DataCardList";
import useWindowDimensions from "../utiles/useDimantions";
import breakpoints from "../breakpoints";
import { useEffect, useState } from "react";
import MobileSearch from "../components/MobileSearch/MobileSearch";
import FilterModal from "../components/FilterModal/FilterModal";
import SortByFilterRowContainer from "../components/SortByFilterRow/SortByFilterRow";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../store/filter";
import { sourcesActions } from "../store/sources";
import { getSources } from "../services/ApiData";
import makeGetRequest from "../services/ApiData";
import { dataActions } from "../store/data";
import { localStorageService } from "../services/localStorage";
import { endPointActions } from "../store/endPoint";
import { makeGetRequestEvery } from "../services/ApiData";
import { filterEverythingActions } from "../store/filterEverything";
import { endPointTypes } from "../utiles/endPoint.types";
import getSourcesMap from "../utiles/getSourcesMap";
const KEY = "resentSearches";

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const [sourcesMap, setSourcesMap] = useState<{
    labels: string[];
    dataSetData: number[];
  }>({ labels: [], dataSetData: [] });
  const { height, width } = useWindowDimensions();
  const [isMobileSearch, setIsMobileSearch] = useState(false);
  const [isEverything, setIsEverything] = useState(false);
  const [isMobileTabletFilter, setIsMobileTabletFilter] = useState(false);
  const [searchsList, setSearchsList] = useState<string[]>([]);
  const [searchItem, setSearchItem] = useState<string>("");
  const [sources, setSources] = useState();
  const endPoint: any = useSelector<any>((state) => state.endPoint.endPoint);
  // const sources: any = useSelector<any>((state) => state.sources.sources);
  const data: any = useSelector<any>((state) => state.data.data);
  const [title, setTitle] = useState<string>("");
  const [currFilters, setCurrFilters] = useState<any>([]);
  // const [filterTopData1, setFilterTopData1] = useState<any>([
  //   { Country: [filterTopData[0].Country, false] },
  //   { Category: [filterTopData[1].Category, false] },
  //   { Sources: [[], false] },
  // ]);
  // const [filterEveryData1, setFilterEveryData] = useState([
  //   { Dates: [[], false] },
  //   { Sources: [[], false] },
  //   { Language: [filterEveryData[2].Language, false] },
  // ]);
  // useEffect(() => {
  //   getSources().then((res) => {
  //     // dispatch(sourcesActions.updateSources(res));
  //     setSources(res);
  //   });
  // }, []);

  const filterTopData = [
    {
      Country: [
        { id: "us", value: "United State" },
        { id: "il", value: "Israel" },
        { id: "ru", value: "Russia" },
        { id: "ar", value: "Argentina" },
        { id: "gb", value: "great Britain" },
        { id: "et", value: "Ethiopia" },
      ],
    },
    {
      Category: [
        { id: "general", value: "General" },
        { id: "business", value: "Business" },
        { id: "health", value: "Health" },
        { id: "entertainment", value: "Entertainment" },
        { id: "science", value: "Science" },
        { id: "sports", value: "Sports" },
        { id: "technology", value: "Technology" },
      ],
    },
    {
      Sources: sources,
    },
  ];
  const filterEveryData = [
    // {
    //   SortBy: [
    //     { id: "popularity", value: "Popularity" },
    //     { id: "publishedAt", value: "Resent" },
    //     { id: "relevancy", value: "Relevancy" },
    //   ],
    // },
    {
      Dates: [],
    },
    {
      Sources: sources,
    },
    {
      Language: [
        { id: "he", value: "Hebrew" },
        { id: "en", value: "English" },
        { id: "ru", value: "Russian" },
        { id: "es", value: "Spanish" },
      ],
    },
  ];
  useEffect(() => {
    if (!sources) {
      getSources().then((res) => {
        // dispatch(sourcesActions.updateSources(res));
        setSources(res);
      });
    }
    if (data) setTitle("Top Headlines in Israel");
  }, []);

  // useEffect(() => {
  //   console.log("now");
  //   console.log(filterEveryData);
  //   console.log(filterTopData);
  // }, sources);

  const getFilterData = useCallback(() => {
    if (endPoint === endPointTypes.TOP_HEADLINES) {
      // return filterTopData1;
      return filterTopData;
    } else {
      // return filterEveryData1;
      return filterEveryData;
    }
  }, [endPoint]);
  // const getFilterData = () => {
  //   if (endPoint === endPointTypes.TOP_HEADLINES) {
  //     return filterTopData;
  //   } else {
  //     return filterEveryData;
  //   }
  // };

  const checkIfToDisable = () => {};

  const parentFilterUpdate = (
    filterType: string,
    filter: string | string[]
  ) => {
    switch (filterType) {
      case "Sources":
        if (endPoint === "top-headlines") {
          dispatch(filterActions.updateSource(filter));
          // setCurrFilters((state: any) => [...state, "Sources"]);
        } else dispatch(filterEverythingActions.updateSource(filter));
        return;

      case "Country":
        dispatch(filterActions.updateCountry(filter));
        setCurrFilters((state: any) => [...state, "Country"]);

        return;
      case "Category":
        dispatch(filterActions.updateCategory(filter));
        setCurrFilters((state: any) => [...state, "Category"]);

        return;
      case "Language":
        dispatch(filterEverythingActions.updateLanguage(filter));
        return;
      case "Dates":
        dispatch(filterEverythingActions.updateDates(filter));
        return;
      case "SoryBy":
        dispatch(filterEverythingActions.updateSortBy(""));
        return;
      case "Top Headlines":
        dispatch(endPointActions.updateEndPoint(filter));
        return;
      default:
        return;
    }
  };

  const checkIfDisable = (filterType: string) => {
    // if (!currFilters.includes(filterType))
    // setCurrFilters((state: any) => [...state, filterType]);
    return false;
  };
  useEffect(() => {
    console.log(currFilters);
  }, [currFilters]);

  // setDatas(datas=>({
  //    ...datas,
  //    [index]: e.target.value
  // }))
  // newArr[index][propertyName];
  // setFilterTopData1((state: any) => ({ ...state, [2].Sources: "newwww" }));
  // let filterTopData12 = [...filterTopData1, { Sources: "new" }];
  // let filterTopData12 = [
  //   ...filterTopData1,
  //   (filterTopData1[2] = {
  //     Sources: [["fd", "fd"], false],
  //   }),
  // ];

  // console.log("filterTopData12", filterTopData12);
  // }
  // if (data) setTitle("Top Headlines in Israel");
  // }, []);

  useEffect(() => {
    let itemsList = localStorageService.loadFromStorage(KEY);
    setSearchsList(itemsList);
  }, [searchItem]);

  const getData = async () => {
    let res;
    if (endPoint === "top-headlines") {
      res = await makeGetRequest(
        {
          filter: {
            Country: "il",
            Category: "",
            Sources: "",
          },
          searchQ: "",
        },
        endPoint,
        1
      );
    } else {
      res = await makeGetRequestEvery({
        filter: {
          Dates: [],
          Language: "",
          Sources: "",
        },
        searchQ: "",
      });
    }
    if (res.status === 200) dispatch(dataActions.updateData(res.data.articles));
  };

  const updateSearchInput = (item: string) => {
    setSearchItem(item);
    dispatch(filterActions.updateSearchQ(item));
    dispatch(filterEverythingActions.updateSearchQ(item));
  };

  const onMobileSearch = () => {
    setIsMobileSearch(true);
  };

  const onBack = () => {
    setIsMobileSearch(false);
  };

  const onMobileTabletFilter = () => {
    setIsMobileTabletFilter(true);
  };

  const toggleSearchIn = () => {
    setIsEverything((state) => !state);
  };

  const onCloseFilter = () => {
    setIsMobileTabletFilter(false);
  };

  const removeItem = (searchItem: string) => {
    localStorageService.removeItem(KEY, searchItem);
    setSearchItem(searchItem);
  };

  const onClearStorage = () => {
    localStorageService.clearStorage(KEY);
    setSearchsList([]);
  };

  return (
    <>
      <GlobalStyles />
      {isMobileSearch && (
        <MobileSearch searchsList={searchsList} onBack={onBack} />
      )}
      {!isMobileSearch && (
        <HomePageContainer>
          <Header
            text="text"
            logo={LogoIcon}
            settings={SettingsIcon}
            notifications={NotificationsIcon}
            search={SearchIcon}
            userName="Zoya Rumin"
            width={width}
            SearchsList={searchsList}
            endPoint={endPoint}
            onMobileSearch={onMobileSearch}
            removeItem={removeItem}
            updateSearchInput={updateSearchInput}
            parentFilterUpdate={parentFilterUpdate}
            onClearStorage={onClearStorage}
          />
          <InnerHomeContainer>
            {width < breakpoints.size.sm ? (
              <>
                <SortByFilterRowContainer
                  onMobileTabletFilter={onMobileTabletFilter}
                />
                {isMobileTabletFilter ? (
                  <FilterModal
                    onCloseFilter={onCloseFilter}
                    toggleSearchIn={toggleSearchIn}
                    isEverything={isEverything}
                  />
                ) : null}
              </>
            ) : (
              <>
                <FilterList
                  filterData={getFilterData()}
                  parentFilterUpdate={parentFilterUpdate}
                  updateSearchInput={updateSearchInput}
                  checkIfDisable={checkIfDisable}
                />
                <SeparetorLine />
                <Title>{title}</Title>
              </>
            )}
            <FeedDataMainContainer>
              <FeedDataContainer>
                <FeedCardList isMobile={width < breakpoints.size.xs} />
                {width > breakpoints.size.sm && <DataCardList />}
              </FeedDataContainer>
            </FeedDataMainContainer>
          </InnerHomeContainer>
        </HomePageContainer>
      )}
    </>
  );
};

export default HomePage;
