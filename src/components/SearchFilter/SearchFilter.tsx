import { useState, useEffect, useRef } from "react";
import { InnerFilter, SearchFilterContainer, SearchSubTitle } from "./styles";
import GlobalStyles from "../../GlobalStyles";
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
}

const SearchFllter: React.FC<SearchFilterProps> = (props) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [currFilter, setCurrFilter] = useState("All");
  const inputRef: any = useRef();

  const updateFilter = (currFilter: string) => {
    setCurrFilter(currFilter);
    setIsDropDownOpen(false);
    // parentUpdate(currFilter);
    return;
  };

  const inputUpdate = (ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();
    let val = ev.target.value;
    setSearchInput(val);
  };

  const toggleResentSearches = () => {
    setIsDropDownOpen((state) => !state);
  };

  // const innerFilter = {
  //   filterSort= "inner"
  //   filterType= "Everything"
  //   filtersList: [
  //     { id: "Everything", value: "Everything" },
  //     { id: "Top Headlines", value: "Top Headlines" },
  //   ],

  // };

  const parentUpdate = (filter: string) => console.log(filter);

  useEffect(() => {}, [isDropDownOpen]);
  return (
    <>
      <GlobalStyles />
      {/* <SearchFilterContainer> */}
      <div>
        <FilterContainer filterSort="primary">
          <FlexSpaceBetween>
            <SearchContainer>
              <Img alt="" src={props.searchIcon} />
              <input
                type="text"
                value={searchInput}
                placeholder="search"
                onChange={inputUpdate}
                onFocus={toggleResentSearches}
                // ref={inputRef}
              ></input>
            </SearchContainer>
            <Filter
              filterSort="inner"
              filterType="Everything"
              filtersList={[
                { id: "Everything", value: "Everything" },
                { id: "Top Headlines", value: "Top Headlines" },
              ]}
              parentUpdate={parentUpdate}
            ></Filter>
            {/* <InnerFilter>
              <span>All</span>
              <img alt="" src={props.forwardIcon} />
            </InnerFilter> */}
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
      </div>
      {/* </SearchFilterContainer> */}
    </>
  );
};

export default SearchFllter;
