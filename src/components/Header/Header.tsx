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
import breakpoints from "../../breakpoints";
import { useAuth0 } from "@auth0/auth0-react";

import { useState } from "react";

export enum IconType {
  LOGO = "logo",
  SETTINGS = "settings",
  NOTIFICATIONS = "notifications",
  INITIALS = "initials",
  SEARCH = "search",
}

export interface HeaderProps {
  text: string;
  logo: string;
  settings: string;
  notifications: string;
  search: string;
  userName: string;
  width: number;
  SearchsList: string[];
  onMobileSearch: () => void;
  removeItem: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  const [isLoginSignOutOpen, setIsLoginSignOutOpen] = useState(false);
  const { logout } = useAuth0();

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
            SearchsList={props.SearchsList}
            searchIcon={searchProps.searchIcon}
            forwardIcon={searchProps.forwardIcon}
            isLargeScreen={props.width > breakpoints.size.sm}
            removeItem={props.removeItem}
          />
        </InnerSearchContainer>
        <RightSideContainer>
          <ImgIcon alt="" src={props.settings} icon={IconType.SETTINGS} />
          <ImgIcon
            alt=""
            src={props.notifications}
            icon={IconType.NOTIFICATIONS}
          />
          {props.width < breakpoints.size.xs && (
            <ImgIcon
              alt=""
              src={props.search}
              icon={IconType.SEARCH}
              onClick={props.onMobileSearch}
            />
          )}
          <InitalsBtn onClick={loginSignOut}>{getInitials()}</InitalsBtn>
        </RightSideContainer>
      </HeaderContainer>
      {isLoginSignOutOpen && (
        <LoginSignOut
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Logout
        </LoginSignOut>
      )}
    </>
  );
};

export default Header;
