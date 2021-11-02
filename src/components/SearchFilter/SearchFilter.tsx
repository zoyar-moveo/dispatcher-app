import { useState, useEffect, useRef } from "react";
import { InnerFilter, SearchFilterContainer, SearchSubTitle } from "./styles";
import { FilterContainer } from "../Filter/styles";
import Filter from "../Filter/Filter";
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
}

const SearchFllter: React.FC<SearchFilterProps> = (props) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const inputRef = useRef<HTMLInputElement | null>();

  const inputUpdate = (ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();
    let val = ev.target.value;
    setSearchInput(val);
  };

  // const toggleResentSearches = () => {
  //   setIsDropDownOpen((state) => !state);
  // };

  const parentUpdate = (filter: string) => console.log(filter);

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
                <div>{searchItem}</div>
                <div>X</div>
              </DropDownItem>
            );
          })}
        </FilterContainer>
      )}
    </SearchFilterContainer>
  );
};

export default SearchFllter;
