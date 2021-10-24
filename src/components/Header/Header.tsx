import {} from "./styles";
import {
  HeaderContainer,
  RightSideContainer,
  ImgIcon,
  InitalsBtn,
} from "./styles";
import { InnerContainer } from "../styledComponents/InnerContainer";
import GlobalStyles from "../../GlobalStyles";

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
}

const Header: React.FC<HeaderProps> = (props) => {
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
  return (
    <>
      <GlobalStyles />
      <HeaderContainer>
        <ImgIcon alt="" src={props.logo} icon={IconType.LOGO} />
        <InnerContainer></InnerContainer>
        <RightSideContainer>
          <ImgIcon alt="" src={props.settings} icon={IconType.SETTINGS} />
          <ImgIcon
            alt=""
            src={props.notifications}
            icon={IconType.NOTIFICATIONS}
          />
          <InitalsBtn>{getInitials()}</InitalsBtn>
        </RightSideContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
