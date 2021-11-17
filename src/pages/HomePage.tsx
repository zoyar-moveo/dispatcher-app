import GlobalStyles from "../GlobalStyles";
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
  SeparetorLine,
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
import { getSources } from "../services/ApiData";
import makeGetRequest from "../services/ApiData";

// const sources = getSources();

const HomePage: React.FC = () => {
  var sources;
  const dispatch = useDispatch();

  const filterData = [
    {
      // Source: [
      //   { id: "Walla", value: "Walla" },
      //   { id: "Mako", value: "Mako" },
      //   { id: "BBC", value: "BBC" },
      // ],
      Sources: sources,
    },
    {
      Country: [
        { id: "us", value: "United State" },
        { id: "il", value: "Israel" },
        { id: "ru", value: "Russia" },
        { id: "ar", value: "Argentina" },
        { id: "gb", value: "Great Briten" },
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
  ];
  const parentUpdate = (filterType: string, filter: string) => {
    switch (filterType) {
      case "Source":
        dispatch(filterActions.updateSource(filter));
        return;
      case "Country":
        dispatch(filterActions.updateCountry(filter));
        return;
      case "Category":
        dispatch(filterActions.updateCategory(filter));
        return;
      default:
        return;
    }
  };

  const { height, width } = useWindowDimensions();
  const [isMobileSearch, setIsMobileSearch] = useState(false);
  const [isEverything, setIsEverything] = useState(true);
  const [isMobileTabletFilter, setIsMobileTabletFilter] = useState(false);
  const searchsList = ["Bitcoin", "Stockes", "Weather"];
  const [data, setData] = useState();

  useEffect(() => {
    getData();
    if (data) {
      sources = getSources();
    }
  }, []);

  const getData = async () => {
    let res = await makeGetRequest();
    setData(res.data);
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

  const removeItem = () => {};

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
            SearchsList={["Bitcoin", "Stockes", "Weather"]}
            onMobileSearch={onMobileSearch}
            removeItem={removeItem}
          />
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
              <FilterList filterData={filterData} parentUpdate={parentUpdate} />
              <SeparetorLine />
            </>
          )}
          <FeedDataMainContainer>
            <FeedDataContainer>
              <FeedCardList
                isMobile={width < breakpoints.size.xs}
                getData={getData}
                data={data}
              />

              <DataCardList />
            </FeedDataContainer>
          </FeedDataMainContainer>
        </HomePageContainer>
      )}
    </>
  );
};

export default HomePage;
