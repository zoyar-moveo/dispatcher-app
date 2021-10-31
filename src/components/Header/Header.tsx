import { LoginSignOut } from "./styles";
import {
  HeaderContainer,
  RightSideContainer,
  ImgIcon,
  InitalsBtn,
  InnerSearchContainer,
} from "./styles";
import SearchFllter from "../SearchFilter/SearchFilter";
import SearchIcon from "../SearchFilter/assets/search.svg";
import ForwardIcon from "../SearchFilter/assets/Forward.svg";
import { useState } from "react";

export enum IconType {
  LOGO = "logo",
  SETTINGS = "settings",
  NOTIFICATIONS = "notifications",
  INITIALS = "initials",
}

export interface HeaderProps {
  text: string;
  logo: string;
  settings: string;
  notifications: string;
  userName: string;
  isLargeScreen: boolean;
}

const Header: React.FC<HeaderProps> = (props) => {
  const [isLoginSignOutOpen, setIsLoginSignOutOpen] = useState(false);

  const getInitials = () => {
    let nameArr: string[] = props.userName.split(" ").slice(0, 2);
    switch (nameArr.length) {
      case 2:
        return (nameArr[0].charAt(0) + nameArr[1].charAt(0)).toUpperCase();
      case 1:
        return nameArr[0].charAt(0).toUpperCase();
      default:
        return "";
    }
  };

  const loginSignOut = () => {
    setIsLoginSignOutOpen((state) => !state);
  };

  const searchProps = {
    filterType: "Everything",
    FilterList: ["Top Headlines", "Everything"],
    SearchsList: ["Bitcoin", "Stockes", "Weather"],
    searchIcon: SearchIcon,
    forwardIcon: ForwardIcon,
  };

  return (
    <>
      <HeaderContainer>
        <ImgIcon alt="" src={props.logo} icon={IconType.LOGO} />
        <InnerSearchContainer>
          <SearchFllter
            filterType={searchProps.filterType}
            FilterList={searchProps.FilterList}
            SearchsList={searchProps.SearchsList}
            searchIcon={searchProps.searchIcon}
            forwardIcon={searchProps.forwardIcon}
            isLargeScreen={props.isLargeScreen}
          />
        </InnerSearchContainer>
        <RightSideContainer>
          <ImgIcon alt="" src={props.settings} icon={IconType.SETTINGS} />
          <ImgIcon
            alt=""
            src={props.notifications}
            icon={IconType.NOTIFICATIONS}
          />
          {/* <div className="flex"> */}
          <InitalsBtn onClick={loginSignOut}>{getInitials()}</InitalsBtn>
          {/* </div> */}
        </RightSideContainer>
      </HeaderContainer>
      {isLoginSignOutOpen && <LoginSignOut>Sign Out</LoginSignOut>}
    </>
  );
};

export default Header;
