import { useState } from "react";
import {
  BtnContiner,
  CategoryItem,
  FilterTitle,
  ListArea,
  MobileFilterContainer,
  TitleListContainer,
} from "./styles";
import backIcon from "./assets/back.svg";
import { BackImg } from "../MobileSearch/styles";
import { Overlay } from "../MobileFilter/styles";
import { EveryKey, MobileFilterProps, TopKey } from "./MobileFilter.types";
import Button from "../Button/Button";
import { btnTypeList } from "../Button/Button";
import filtersTopOptions from "../../store/filtersTopOptions";
import { useSelector } from "react-redux";
import DatePickerCmp from "../dapePickerCmp/datePickerCmp";
import moment from "moment";

const MobileFilter: React.FC<MobileFilterProps> = (props) => {
  const [isInnerFilter, setIsInnerFilter] = useState(false);
  const [isDatePicker, setIsDatePicker] = useState(false);
  const [title, setTitle] = useState<EveryKey | TopKey | null>(null);
  const [clickedOption, setClickedOption] = useState<any>();
  const endPoint: any = useSelector<any>((state) => state.endPoint.endPoint);

  const getFilterType = () => {
    return props.isEverything
      ? props.FilterCatagories.FilterEverything
      : props.FilterCatagories.FilterTop;
  };

  const OpenCurrFilter = (key: EveryKey | TopKey) => {
    setIsInnerFilter(true);
    setTitle(key);
    if (key === "Dates") setIsDatePicker(true);
  };

  const onFilterBack = () => {
    setIsInnerFilter(false);
    setIsDatePicker(false);
  };

  const getEverythingKey = (): EveryKey => {
    return title === EveryKey.DATES
      ? EveryKey.DATES
      : title === EveryKey.LANGUAGE
      ? EveryKey.LANGUAGE
      : EveryKey.SOURCES;
  };

  const getTopKey = (): TopKey => {
    return title === TopKey.CATEGORY
      ? TopKey.CATEGORY
      : title === TopKey.COUNTRY
      ? TopKey.COUNTRY
      : TopKey.SOURCES;
  };

  const getOptions = (title: EveryKey | TopKey) => {
    if (!title) return;
    return props.isEverything
      ? props.FilterCatagories.FilterEverything[getEverythingKey()]
      : props.FilterCatagories.FilterTop[getTopKey()];
  };

  const updateFilter = (option: any) => {
    if (clickedOption === option.value) {
      setClickedOption("");
      props.updateSelceted("All", "All", option.type);
    } else {
      setClickedOption(option.value);
      props.updateSelceted(option.id, option.value, option.type);
    }
  };

  const updateReduxFilters = () => {
    for (const key in props.filterTopSelected) {
      if (props.filterTopSelected[key][0] === "All") {
        props.parentFilterUpdate(key, "");
      } else props.parentFilterUpdate(key, props.filterTopSelected[key][0]);
    }
    props.onCloseFilter();
  };

  const updateDateFilter = (start: string, end: string) => {
    let startDate = moment(Date.parse(start)).format("YYYY-MM-DD");
    let endDate = moment(Date.parse(end)).format("YYYY-MM-DD");
    props.parentFilterUpdate("Dates", [startDate, endDate]);
  };
  return (
    <div>
      <Overlay onClick={props.onCloseFilter} />
      <MobileFilterContainer>
        <TitleListContainer>
          <FilterTitle>
            {isInnerFilter ? (
              <>
                <BackImg alt="" src={backIcon} onClick={onFilterBack} />
                {title}
              </>
            ) : (
              "Filter"
            )}
          </FilterTitle>
          <ListArea>
            {isInnerFilter ? (
              <>
                {title
                  ? getOptions(title)!.options.map(
                      (option: any, idx: number) => (
                        <CategoryItem
                          key={idx}
                          onClick={() => updateFilter(option)}
                          isOptionClicked={option.value === clickedOption}
                        >
                          {option.value}
                        </CategoryItem>
                      )
                    )
                  : null}
              </>
            ) : (
              <>
                <CategoryItem onClick={props.toggleSearchIn}>
                  <span>Search In</span>
                  <span>
                    {props.isEverything ? "Everything" : "Top Headlines"}
                    {/* {props.isEverything ? "Everything" : "Top Headlines"} */}
                  </span>
                </CategoryItem>
                {Object.entries(
                  props.isEverything
                    ? props.filterEverySelected
                    : props.filterTopSelected
                ).map(([key, value]: any, idx) => (
                  <>
                    <CategoryItem onClick={() => OpenCurrFilter(key)} key={idx}>
                      <span>{key}</span>
                      <span>{value[1]}</span>
                    </CategoryItem>
                  </>
                ))}
              </>
            )}
          </ListArea>
        </TitleListContainer>
        {isDatePicker && <DatePickerCmp updateDateFilter={updateDateFilter} />}
        <BtnContiner>
          <Button
            text={"VIEW RESULTS"}
            isArrow={false}
            btnType={btnTypeList.primary}
            onClickFunc={updateReduxFilters}
          />
        </BtnContiner>
      </MobileFilterContainer>
    </div>
  );
};

export default MobileFilter;
