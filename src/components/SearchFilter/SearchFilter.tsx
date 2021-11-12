import { useState, useEffect, useRef } from "react";
import {
  ExitImg,
  InnerFilter,
  ItemText,
  SearchFilterContainer,
  SearchSubTitle,
} from "./styles";
import { FilterContainer } from "../Filter/styles";
import Filter from "../Filter/Filter";
import ExitIcon from "./assets/exit.svg";
import {
  DropDownItem,
  Img,
  SearchPlasholder,
  SearchContainer,
  FlexSpaceBetween,
} from "./styles";

export interface SearchFilterProps {
  filterType: string;
  FilterList: string[];
  SearchsList: string[];
  searchIcon: string;
  forwardIcon: string;
  isLargeScreen: boolean;
  removeItem: () => void;
}

const SearchFllter: React.FC<SearchFilterProps> = (props) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const inputUpdate = (ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();
    let val = ev.target.value;
    setSearchInput(val);
  };

  const parentUpdate = (filter: string) => console.log(filter);

  const updateSearch = (searchItem: string) => {
    setSearchInput(searchItem);
  };

  useEffect(() => {}, [isDropDownOpen]);
  return (
    <SearchFilterContainer>
      <FilterContainer filterSort="primary">
        <FlexSpaceBetween>
          <SearchContainer>
            <Img alt="" src={props.searchIcon} />
            <input
              type="text"
              value={searchInput}
              placeholder="search"
              onChange={inputUpdate}
              onFocus={() => setIsDropDownOpen(true)}
              onBlur={() => setIsDropDownOpen(false)}
            ></input>
          </SearchContainer>
          {props.isLargeScreen && (
            <Filter
              filterSort="inner"
              filterType="Everything"
              filtersList={[
                { id: "Everything", value: "Everything" },
                { id: "Top Headlines", value: "Top Headlines" },
              ]}
              parentUpdate={parentUpdate}
            ></Filter>
          )}
        </FlexSpaceBetween>
      </FilterContainer>

      {isDropDownOpen && (
        <FilterContainer filterSort="primary">
          <SearchSubTitle>
            <span>{"resent searches".toUpperCase()}</span>
            <span>{"clear".toUpperCase()}</span>
          </SearchSubTitle>
          {props.SearchsList.map((searchItem: string, index: number) => {
            return (
              <DropDownItem key={index}>
                <ItemText onClick={() => updateSearch(searchItem)}>
                  {searchItem}
                </ItemText>
                <ExitImg alt="" src={ExitIcon} onClick={props.removeItem} />
              </DropDownItem>
            );
          })}
        </FilterContainer>
      )}
    </SearchFilterContainer>
  );
};

export default SearchFllter;
