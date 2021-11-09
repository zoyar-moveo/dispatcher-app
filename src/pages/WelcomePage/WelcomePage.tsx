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

const WelcomePage: React.FC = () => {
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
            onClickFunc={() => {}}
          />
        </TextBtnContsiner>
      </ContentArea>
    </WelcomeContainer>
  );
};

export default WelcomePage;
