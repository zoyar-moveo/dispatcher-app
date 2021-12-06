import { useState, useEffect, useRef } from "react";
import {
  ClearBtn,
  ExitImg,
  ItemText,
  Resent,
  SearchFilterContainer,
  SearchSubTitle,
  SeparatingLine,
} from "./styles";
import { FilterContainer } from "../Filter/styles";
import Filter from "../Filter/Filter";
import ExitIcon from "./assets/exit.svg";
import { DropDownItem, Img, SearchContainer, FlexSpaceBetween } from "./styles";
import { localStorageService } from "../../services/localStorage";
import { endPointTypes } from "../../utiles/endPoint.types";

const KEY = "resentSearches";

export interface SearchFilterProps {
  filterType: string;
  FilterList: string[];
  SearchsList: string[];
  searchIcon: string;
  forwardIcon: string;
  isLargeScreen: boolean;
  endPoint: string;
  removeItem: (searchItem: string) => void;
  updateSearchInput: (item: string) => void;
  parentFilterUpdate: (filterType: string, filter: string | string[]) => void;
  onClearStorage: () => void;
}

const SearchFllter: React.FC<SearchFilterProps> = (props) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [isResentSearchSelected, setIsResentSearchSelected] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  const refInput = useRef<HTMLInputElement>(null);

  const onInputVal = (ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();
    let val = ev.target.value;
    setSearchVal(val);
    setIsDropDownOpen(false);
  };

  const onInputUpdate = (ev: any) => {
    ev.preventDefault();
    if (searchVal !== "") {
      setSearchInput(searchVal);
      localStorageService.saveToStorage(KEY, searchVal);
    }
    setIsFocus(false);
  };

  const onReasentSearchItem = (searchItem: string) => {
    setIsResentSearchSelected(true);
    setIsDropDownOpen(false);
    setIsFocus(false);
    setSearchInput(searchItem);
    setSearchVal(searchItem);
    props.updateSearchInput(searchItem);
  };

  useEffect(() => props.updateSearchInput(searchInput), [searchInput]); // update filter in redux

  const handleClickOutside = (ev: any) => {
    if (ref.current && !ref.current.contains(ev.target)) {
      setIsDropDownOpen(false);
      setIsFocus(false);
    }
  };

  const handleKeyDown = (ev: any) => {
    if (ev.key === "Enter") {
      setIsDropDownOpen(false);
      refInput.current?.blur();
      onInputUpdate(ev);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  const onFocusInput = () => {
    setIsDropDownOpen(true);
    setIsFocus(true);
  };

  const onClearBtn = () => {
    props.onClearStorage();
    setIsDropDownOpen(false);
  };

  return (
    <SearchFilterContainer ref={ref} isFocus={isFocus}>
      {/* <FilterContainer filterSort="primary" isFocus={isFocus}> */}
      <FlexSpaceBetween>
        <SearchContainer>
          <Img alt="" src={props.searchIcon} />
          <form onSubmit={onInputUpdate}>
            <input
              type="text"
              value={searchVal}
              placeholder="Search"
              onChange={onInputVal}
              onFocus={onFocusInput}
              onKeyDown={handleKeyDown}
              autoComplete="false"
              ref={refInput}
            ></input>
          </form>
        </SearchContainer>
        {props.isLargeScreen && (
          <>
            <SeparatingLine />
            <div onClick={() => setIsDropDownOpen(false)}>
              <Filter
                filterSort="inner"
                filterType="Top Headlines"
                filtersList={[
                  { id: endPointTypes.EVERYTHING, value: "Everything" },
                  { id: endPointTypes.TOP_HEADLINES, value: "Top Headlines" },
                ]}
                parentFilterUpdate={props.parentFilterUpdate}
              ></Filter>
            </div>
          </>
        )}
      </FlexSpaceBetween>
      {/* </FilterContainer> */}

      {isDropDownOpen && props.SearchsList && (
        // <FilterContainer filterSort="inner" isFocus={true}>
        <FilterContainer filterSort="resent" isFocus={isFocus}>
          <SearchSubTitle>
            <Resent>{"resent searches".toUpperCase()}</Resent>
            <ClearBtn onClick={onClearBtn}>{"clear".toUpperCase()}</ClearBtn>
          </SearchSubTitle>
          {props.SearchsList.map((searchItem: string, index: number) => {
            return (
              <DropDownItem key={index}>
                <ItemText onClick={() => onReasentSearchItem(searchItem)}>
                  {searchItem}
                </ItemText>
                <ExitImg
                  alt=""
                  src={ExitIcon}
                  onClick={() => props.removeItem(searchItem)}
                />
              </DropDownItem>
            );
          })}
        </FilterContainer>
      )}
    </SearchFilterContainer>
  );
};

export default SearchFllter;
