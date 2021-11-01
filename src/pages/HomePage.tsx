import GlobalStyles from "../GlobalStyles";
import Header from "../components/Header/Header";
import LogoIcon from "../components/Header/assets/LOGO1.svg";
import SettingsIcon from "../components/Header/assets/settings.svg";
import NotificationsIcon from "../components/Header/assets/notifications.svg";
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

  return (
    <>
      <GlobalStyles />
      <HomePageContainer>
        <Header
          text="text"
          logo={LogoIcon}
          settings={SettingsIcon}
          notifications={NotificationsIcon}
          userName="Zoya Rumin"
          isLargeScreen={width > breakpoints.size.lg}

        />
        {width > 768 && (
          <FilterList filterData={filterData} parentUpdate={parentUpdate} />
        )}
        <SeparetorLine />
        <FeedDataMainContainer>
          <FeedDataContainer>
            <FeedCardList isMobile={width < breakpoints.size.xs} />

            <DataCardList />
          </FeedDataContainer>
        </FeedDataMainContainer>
      </HomePageContainer>
    </>
  );
};

export default HomePage;
