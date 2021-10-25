import { useState } from "react";
import {
  FilterContainer,
  DropDownList,
  DropDownItem,
  CurrFilter,
  MainFilterContainer,
} from "./styles";
import Arrow from "./assets/Forward.svg";
import GlobalStyles from "../../GlobalStyles";
import React from "react";

export interface FilterProps {
  filterSort: string;
  filterType: string;
  filtersList: any;
  parentUpdate: (filter: string) => void;
}

const Filter: React.FC<FilterProps> = ({
  filterSort,
  filterType,
  filtersList,
  parentUpdate,
}) => {
  const [IsDropDownOpen, SetIsDropDownOpen] = useState(false);

  const [currFilter, setCurrFilter] = useState(filterType);

  const updateFilter = (currFilter: string) => {
    setCurrFilter(currFilter);
    SetIsDropDownOpen(false);
    parentUpdate(currFilter);
    return;
  };

  return (
    <>
      <GlobalStyles />
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
                  onClick={() => updateFilter(filterItem.value)}
                  key={filterItem.id}
                >
                  {filterItem.value}
                </DropDownItem>
              ))}
            </DropDownList>
          </FilterContainer>
        )}
      </MainFilterContainer>
    </>
  );
};

export default Filter;
