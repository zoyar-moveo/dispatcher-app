import { useState } from "react";
import {
  FilterContainer,
  DropDownList,
  DropDownItem,
  CurrFilter,
  MainFilterContainer,
} from "./styles";
import Arrow from "./assets/Forward.svg";
import React from "react";

export interface FilterProps {
  filterSort: string;
  filterType: string;
  filtersList: any;
  parentUpdate: (filterType: string, filter: string) => void;
}

const Filter: React.FC<FilterProps> = ({
  filterSort,
  filterType,
  filtersList,
  parentUpdate,
}) => {
  const [IsDropDownOpen, SetIsDropDownOpen] = useState(false);

  const [currFilter, setCurrFilter] = useState(filterType);

  const updateFilter = (
    filterType: string,
    currFilterId: string,
    currFilterValue: string
  ) => {
    setCurrFilter(currFilterValue);
    SetIsDropDownOpen(false);
    parentUpdate(filterType, currFilterId);
    return;
  };

  return (
    <MainFilterContainer>
      <FilterContainer filterSort={filterSort}>
        <CurrFilter onClick={() => SetIsDropDownOpen((state) => !state)}>
          <div>{currFilter}</div>
          <img alt="" src={Arrow} />
        </CurrFilter>
      </FilterContainer>
      {IsDropDownOpen && (
        <FilterContainer filterSort={filterSort}>
          <DropDownList>
            {filtersList.map((filterItem: { id: string; value: string }) => (
              <DropDownItem
                onClick={() =>
                  updateFilter(filterType, filterItem.id, filterItem.value)
                }
                key={filterItem.id}
              >
                {filterItem.value}
              </DropDownItem>
            ))}
          </DropDownList>
        </FilterContainer>
      )}
    </MainFilterContainer>
  );
};

export default Filter;
