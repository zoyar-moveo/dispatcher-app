import { useEffect, useState } from "react";
import {
  FilterContainer,
  DropDownList,
  DropDownItem,
  CurrFilter,
  MainFilterContainer,
  FilterTitle,
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
  isDisabled?: boolean;
}

const Filter: React.FC<FilterProps> = ({
  filterSort,
  filterType,
  filtersList,
  parentFilterUpdate,
  isDisabled,
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
    setCurrFilter(
      `${moment(Date.parse(startDate)).format("YYYY/MM/DD")} - ${moment(
        Date.parse(endDate)
      ).format("YYYY/MM/DD")}`
    );
  };

  return (
    <>
      <MainFilterContainer>
        <FilterContainer
          filterSort={filterSort}
          filterTitle={true}
          isDisabled={isDisabled}
        >
          {/* <div>{filterSort}</div> */}
          <CurrFilter
            filterType={filterType}
            onClick={() => SetIsDropDownOpen((state) => !state)}
          >
            <FilterTitle filterSort={filterSort}>{currFilter}</FilterTitle>
            <img alt="" src={Arrow} />
          </CurrFilter>
        </FilterContainer>
        {IsDropDownOpen && filterType !== "Dates" && (
          <FilterContainer filterSort={filterSort} isDropDown={true}>
            <>{console.log(filtersList)}</>
            <DropDownList filterSort={filterSort}>
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
          <div style={{ position: "absolute" }}>
            <DatePickerComp updateDateFilter={updateDateFilter} />
          </div>
        )}
      </MainFilterContainer>
    </>
  );
};

export default Filter;
