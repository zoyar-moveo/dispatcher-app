import {
  BackImg,
  ClearBtn,
  DeleteBtn,
  ExitImg,
  MobileSearchContainer,
  RecentSearchesArea,
  ResentList,
  ResentSearch,
  ResentSearchItem,
  SearchBtn,
  SearchKey,
  SearchRow,
  SearchSubtitle,
} from "./styles";
import backIcon from "./assets/back.svg";
import ExitIcon from "./assets/exit.svg";
import SearchIcon from "./assets/search.svg";
import { useState } from "react";

export interface MobileSearchProps {
  searchsList: string[];
  onBack: () => void;
}

const MobileSearch: React.FC<MobileSearchProps> = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [isDeleteIcon, setIsDeleteIcon] = useState(false);
  const [isSearchIcon, setIsSearchIcon] = useState(false);

  const inputUpdate = (ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();
    let val = ev.target.value;
    setSearchInput(val);
    setIsDeleteIcon(true);
  };

  const upperCaseValue = () => {
    // update global state
    if (searchInput) setSearchInput((state) => '"' + state.toUpperCase() + '"');
    setIsDeleteIcon(false);
    setIsSearchIcon(true);
  };

  return (
    <MobileSearchContainer>
      <SearchRow>
        <BackImg alt="" src={backIcon} onClick={props.onBack} />
        <input
          type="text"
          value={searchInput}
          placeholder="Search"
          onChange={inputUpdate}
          onBlur={upperCaseValue}
        ></input>
        {isDeleteIcon && <DeleteBtn alt="" src={ExitIcon} />}
        {isSearchIcon && <SearchBtn alt="" src={SearchIcon} />}
      </SearchRow>
      <RecentSearchesArea>
        <SearchSubtitle>
          <ResentSearch>resent searches</ResentSearch>
          <ClearBtn>clear</ClearBtn>
        </SearchSubtitle>
        <ResentList>
          {props.searchsList
            ? props.searchsList.map((searchItem: string, index: number) => {
                return (
                  <ResentSearchItem key={index}>
                    <SearchKey>{searchItem}</SearchKey>
                    <ExitImg alt="" src={ExitIcon} />
                  </ResentSearchItem>
                );
              })
            : null}
        </ResentList>
      </RecentSearchesArea>
    </MobileSearchContainer>
  );
};

export default MobileSearch;
