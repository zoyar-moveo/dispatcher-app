import { useState, useEffect } from "react";
import {
  ExitImg,
  ItemText,
  SearchFilterContainer,
  SearchSubTitle,
} from "./styles";
import { FilterContainer } from "../Filter/styles";
import Filter from "../Filter/Filter";
import ExitIcon from "./assets/exit.svg";
import { DropDownItem, Img, SearchContainer, FlexSpaceBetween } from "./styles";
import { localStorageService } from "../../services/localStorage";
const KEY = "resentSearches";

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
  const [searchVal, setSearchVal] = useState("");

  const onInputVal = (ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();
    let val = ev.target.value;
    setSearchVal(val);
    setIsDropDownOpen(false);
  };

  const onInputUpdate = (ev: any) => {
    ev.preventDefault();
    setSearchInput(searchVal);
    localStorageService.saveToStorage(KEY, searchVal);
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
            <form onSubmit={onInputUpdate}>
              <input
                type="text"
                value={searchVal}
                placeholder="search"
                onChange={onInputVal}
                onFocus={() => setIsDropDownOpen(true)}
                onBlur={() => setIsDropDownOpen(false)}
              ></input>
            </form>
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
