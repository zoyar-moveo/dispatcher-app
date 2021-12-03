import { FilterListContainer } from "./styles";
import Filter from "../Filter/Filter";
import _ from "lodash";

export interface FilterListProps {
  filterData: any;
  parentFilterUpdate: (
    filterType: string,
    filter: any
    // filter: { Sources: string; Country: string; Category: string }
  ) => void;
  updateSearchInput: (item: string) => void;
  checkIfDisable: (filterType: string) => boolean;
  // isDisables?: boolean;
}

const FilterList: React.FC<FilterListProps> = (props) => {
  if (_.isEmpty(props.filterData)) return <div>loading..</div>;
  return (
    <FilterListContainer>
      {props.filterData.map((dataType: string, index: number) => {
        return (
          <Filter
            filterSort="secondary"
            filterType={Object.keys(dataType)[0].toString()}
            filtersList={Object.values(dataType)[0]}
            parentFilterUpdate={props.parentFilterUpdate}
            isDisabled={props.checkIfDisable(
              Object.keys(dataType)[0].toString()
            )}
            key={index}
          ></Filter>
        );
      })}
    </FilterListContainer>
  );
};

export default FilterList;
