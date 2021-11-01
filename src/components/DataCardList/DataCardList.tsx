import { datesArgs, sourceArgs, tagArgs } from "../../services/DataCardData";
import DataCard from "./../DataCard/DataCard";
import { DataCardContainer } from "./styles";

const DataCardList: React.FC = () => {
  return (
    <DataCardContainer>
      <DataCard
        DataType={sourceArgs.DataType}
        data={sourceArgs.data}
        options={sourceArgs.options}
      />
      <DataCard
        DataType={tagArgs.DataType}
        data={tagArgs.data}
        options={tagArgs.options}
      />
      <DataCard
        DataType={datesArgs.DataType}
        data={datesArgs.data}
        options={datesArgs.options}
      />
    </DataCardContainer>
  );
};

export default DataCardList;
