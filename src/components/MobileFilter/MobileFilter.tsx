import { useState } from "react";
import {
  CatagoryItem,
  FilterTitle,
  ListArea,
  MobileFilterContainer,
} from "./styles";
import backIcon from "./assets/back.svg";
import { BackImg } from "../MobileSearch/styles";
import { Overlay } from "../MobileFilter/styles";

type FilterEverythingT = {
  Sources: { selected: string; options: string[] };
  Language: { selected: string; options: string[] };
  Dates: { selected: string; options: string[] };
};
type FilterTopT = {
  Sources: { selected: string; options: string[] };
  Country: { selected: string; options: string[] };
  Catagory: { selected: string; options: string[] };
};

export interface FilterI {
  FilterEverything: FilterEverythingT;
  FilterTop: FilterTopT;
}

export interface MobileFilterProps {
  FilterCatagories: FilterI;
  isEverything: boolean;
  toggleSearchIn: () => void;
  onFilterBack: () => void;
  onCloseFilter: () => void;
}

const MobileFilter: React.FC<MobileFilterProps> = (props) => {
  const [isInnerFilter, setIsInnerFilter] = useState(false);
  const [title, setTitle] = useState("");

  const getFilterType = () => {
    return props.isEverything
      ? props.FilterCatagories.FilterEverything
      : props.FilterCatagories.FilterTop;
  };

  const OpenCurrFilter = (key: string) => {
    setIsInnerFilter(true);
    setTitle(key);
  };

  const onFilterBack = () => {
    setIsInnerFilter(false);
  };

  const getEverythingKey = (): "Dates" | "Language" | "Sources" => {
    return title === "Dates"
      ? "Dates"
      : title === "Language"
      ? "Language"
      : "Sources";
  };

  const getTopKey = (): "Catagory" | "Country" | "Sources" => {
    return title === "Catagory"
      ? "Catagory"
      : title === "Country"
      ? "Country"
      : "Sources";
  };

  const getOptions = () => {
    return props.isEverything
      ? props.FilterCatagories.FilterEverything[getEverythingKey()]
      : props.FilterCatagories.FilterTop[getTopKey()];
  };

  const updateFilter = (option: string) => {
    // update options
  };

  return (
    <div>
      <Overlay onClick={props.onCloseFilter} />
      <MobileFilterContainer>
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
              {getOptions().options.map((option: string, idx: number) => (
                <CatagoryItem key={idx} onClick={() => updateFilter(option)}>
                  {option}
                </CatagoryItem>
              ))}
            </>
          ) : (
            <>
              <CatagoryItem onClick={props.toggleSearchIn}>
                <span>Search In</span>
                <span>
                  {props.isEverything ? "Everything" : "Top Headlines"}
                </span>
              </CatagoryItem>
              {Object.entries(getFilterType()).map(([key, value], idx) => (
                <>
                  <CatagoryItem onClick={() => OpenCurrFilter(key)} key={idx}>
                    <span>{key}</span>
                    <span>{value.selected}</span>
                  </CatagoryItem>
                </>
              ))}
            </>
          )}
        </ListArea>
      </MobileFilterContainer>
    </div>
  );
};

export default MobileFilter;
