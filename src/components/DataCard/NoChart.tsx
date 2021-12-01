import NoDataSVG from "./assets/chart.svg";
import { NoChartContainer, NoDataImg, NoDataText } from "./styles";

const NoChart: React.FC = (props) => {
  return (
    <NoChartContainer>
      <NoDataImg src={NoDataSVG} alt="" />
      <NoDataText>No data to display</NoDataText>
    </NoChartContainer>
  );
};

export default NoChart;
