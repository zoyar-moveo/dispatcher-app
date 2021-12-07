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
import ReactTooltip from "react-tooltip";
import { useSelector } from "react-redux";

export interface FilterProps {
  filterSort: string;
  filterType: string;
  filtersList: any;
  parentFilterUpdate: (filterType: string, filter: string | string[]) => void;
  isDisabled?: boolean;
  isSortByMobile?: boolean;
}

const Filter: React.FC<FilterProps> = ({
  filterSort,
  filterType,
  filtersList,
  parentFilterUpdate,
  isDisabled,
  isSortByMobile,
}) => {
  const [IsDropDownOpen, SetIsDropDownOpen] = useState(false);
  const endPoint: any = useSelector<any>((state) => state.endPoint.endPoint);
  const [currFilter, setCurrFilter] = useState(filterType);
  // const [currFilter, setCurrFilter] = useState(filterType);

  useEffect(() => {
    if (filterType === "Top Headlines") {
      if (endPoint === "everything") setCurrFilter("Everything");
      else setCurrFilter("Top Headline");
    } else {
      setCurrFilter(filterType);
    }
  }, [filterType]);

  useEffect(() => {
    if (filterType === "Country") setCurrFilter("Israel");
  }, []);

  const updateFilter = (
    filterType: string,
    currFilterId: string,
    currFilterValue: string,
    isChoosenFilter?: boolean
  ) => {
    if (isChoosenFilter && filterType !== "Top Headlines") {
      setCurrFilter(filterType);
      parentFilterUpdate(filterType, "");
    } else {
      setCurrFilter(currFilterValue);
      parentFilterUpdate(filterType, currFilterId);
    }

    SetIsDropDownOpen(false);
    return;
  };

  const updateDateFilter = (start: string, end: string) => {
    let startDate = moment(Date.parse(start)).format("YYYY-MM-DD");
    let endDate = moment(Date.parse(end)).format("YYYY-MM-DD");
    parentFilterUpdate("Dates", [startDate, endDate]);
    if (end) SetIsDropDownOpen(false);
    setCurrFilter(
      `${moment(Date.parse(startDate)).format("DD/MM/YY")} - ${moment(
        Date.parse(endDate)
      ).format("DD/MM/YY")}`
    );
  };

  return (
    <>
      <MainFilterContainer isSortByMobile={isSortByMobile}>
        <span data-tip data-for={isDisabled ? "disabledBtnTip" : ""}>
          <FilterContainer
            filterSort={filterSort}
            filterTitle={true}
            isDisabled={isDisabled}
          >
            <CurrFilter
              filterType={filterType}
              isSortByMobile={isSortByMobile}
              onClick={() => SetIsDropDownOpen((state) => !state)}
            >
              <FilterTitle filterSort={filterSort}>
                {filterType === "sortBy" && currFilter === "sortBy"
                  ? "Sort By"
                  : currFilter}
              </FilterTitle>
              <img alt="" src={Arrow} />
            </CurrFilter>
          </FilterContainer>
        </span>
        {isDisabled && (
          <ReactTooltip
            id="disabledBtnTip"
            place="top"
            effect="solid"
            type="info"
          >
            Filter disabled for this combination
          </ReactTooltip>
        )}
        {IsDropDownOpen && filterType !== "Dates" && (
          <FilterContainer filterSort={filterSort} isDropDown={true}>
            <DropDownList filterSort={filterSort}>
              {filtersList.map((filterItem: { id: string; value: string }) => (
                <DropDownItem
                  isChosenFilter={currFilter === filterItem.value}
                  onClick={() =>
                    updateFilter(
                      filterType,
                      filterItem.id,
                      filterItem.value,
                      currFilter === filterItem.value
                    )
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
