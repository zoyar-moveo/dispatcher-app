import { FilterListContainer } from "./styles";
import Filter from "../Filter/Filter";
import { useDispatch } from "react-redux";

export interface FilterListProps {
  filterData: any;
  parentUpdate: (
    filterType: string,
    filter: any
    // filter: { Sources: string; Country: string; Category: string }
  ) => void;
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
