import { FilterListContainer } from "./styles";
import Filter from "../Filter/Filter";

export interface FilterListProps {
  filterData: any;
  parentUpdate: (filter: string) => void;
}

const FilterList: React.FC<FilterListProps> = (props) => {
  return (
    <FilterListContainer>
      {props.filterData.map((dataType: string, index: number) => {
        return (
          <Filter
            filterType={Object.keys(dataType).toString()}
            filtersList={Object.values(dataType)[0]}
            parentUpdate={props.parentUpdate}
            key={index}
          ></Filter>
        );
      })}
    </FilterListContainer>
  );
};

export default FilterList;
