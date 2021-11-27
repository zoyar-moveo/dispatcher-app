import { useEffect, useState } from "react";
import {
  FilterContainer,
  DropDownList,
  DropDownItem,
  CurrFilter,
  MainFilterContainer,
} from "./styles";
import Arrow from "./assets/Forward.svg";
import React from "react";
import DatePickerComp from "../dapePickerCmp/datePickerCmp";
import moment from "moment";

export interface FilterProps {
  filterSort: string;
  filterType: string;
  filtersList: any;
  parentFilterUpdate: (filterType: string, filter: string | string[]) => void;
}

const Filter: React.FC<FilterProps> = ({
  filterSort,
  filterType,
  filtersList,
  parentFilterUpdate,
}) => {
  const [IsDropDownOpen, SetIsDropDownOpen] = useState(false);

  const [currFilter, setCurrFilter] = useState(filterType);

  useEffect(() => {
    setCurrFilter(filterType);
  }, [filterType]);

  const updateFilter = (
    filterType: string,
    currFilterId: string,
    currFilterValue: string
  ) => {
    setCurrFilter(currFilterValue);
    SetIsDropDownOpen(false);
    parentFilterUpdate(filterType, currFilterId);
    return;
  };

  const updateDateFilter = (start: string, end: string) => {
    let startDate = moment(Date.parse(start)).format("YYYY-MM-DD");
    let endDate = moment(Date.parse(end)).format("YYYY-MM-DD");
    parentFilterUpdate("Dates", [startDate, endDate]);
    if (end) SetIsDropDownOpen(false);
    setCurrFilter(`${startDate} - ${endDate}`);
  };

  return (
    <MainFilterContainer>
      <FilterContainer filterSort={filterSort}>
        <CurrFilter onClick={() => SetIsDropDownOpen((state) => !state)}>
          <div>{currFilter}</div>
          <img alt="" src={Arrow} />
        </CurrFilter>
      </FilterContainer>
      {IsDropDownOpen && filterType !== "Dates" && (
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
      {IsDropDownOpen && filterType === "Dates" && (
        <DatePickerComp updateDateFilter={updateDateFilter} />
      )}
    </MainFilterContainer>
  );
};

export default Filter;
