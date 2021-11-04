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
import { useState } from "react";
import MobileSearch from "../components/MobileSearch/MobileSearch";
import FilterModal from "../components/FilterModal/FilterModal";
import SortByFilterRowContainer from "../components/SortByFilterRow/SortByFilterRow";

const HomePage: React.FC = () => {
  const filterData = [
    {
      Source: [
        { id: "Walla", value: "Walla" },
        { id: "Mako", value: "Mako" },
        { id: "BBC", value: "BBC" },
      ],
    },
    {
      Country: [
        { id: "USA", value: "USA" },
        { id: "Israel", value: "USA" },
        { id: "Canada", value: "Canada" },
      ],
    },
    {
      Category: [
        { id: "Politics", value: "Politics" },
        { id: "Health", value: "Health" },
        { id: "Finance", value: "Finance" },
      ],
    },
  ];
  const parentUpdate = (filter: string) => console.log(filter);
  const { height, width } = useWindowDimensions();
  const [isMobileSearch, setIsMobileSearch] = useState(false);
  const [isEverything, setIsEverything] = useState(true);
  const [isMobileTabletFilter, setIsMobileTabletFilter] = useState(false);
  const searchsList = ["Bitcoin", "Stockes", "Weather"];
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
            onMobileSearch={onMobileSearch}
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
              <FeedCardList isMobile={width < breakpoints.size.xs} />

              <DataCardList />
            </FeedDataContainer>
          </FeedDataMainContainer>
        </HomePageContainer>
      )}
    </>
  );
};

export default HomePage;
