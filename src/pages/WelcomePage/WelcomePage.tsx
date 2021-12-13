import {
  ContentArea,
  LogoArea,
  LogoImg,
  Subtitle,
  TextBtnContsiner,
  TextContainer,
  Title,
  WelcomeContainer,
} from "./styles";
import Logo from "./assets/LOGO.svg";
import Button, { btnTypeList } from "../../components/Button/Button";
import { useAuth0 } from "@auth0/auth0-react";

const WelcomePage: React.FC = () => {
  // test
  const { loginWithRedirect } = useAuth0();
  return (
    <WelcomeContainer>
      <LogoArea>
        <LogoImg alt="" src={Logo} />
      </LogoArea>
      <ContentArea>
        <TextBtnContsiner>
          <TextContainer>
            <Title>Welcome to Dispatcher</Title>
            <Subtitle>
              Locate articles and breaking news headlines from news sources and
              blogs across the web
            </Subtitle>
          </TextContainer>
          <Button
            text="continue"
            isArrow={true}
            btnType={btnTypeList.welcomeBtn}
            onClickFunc={() => loginWithRedirect()}
          />
        </TextBtnContsiner>
      </ContentArea>
    </WelcomeContainer>
  );
};

export default WelcomePage;
