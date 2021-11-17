import { FilterListContainer } from "./styles";
import Filter from "../Filter/Filter";

export interface FilterListProps {
  filterData: any;
  parentUpdate: (filterType: string, filter: any) => void;
}

const FilterList: React.FC<FilterListProps> = (props) => {
  return (
    <FilterListContainer>
      {props.filterData.map((dataType: string, index: number) => {
        return (
          <Filter
            filterSort="secondary"
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
