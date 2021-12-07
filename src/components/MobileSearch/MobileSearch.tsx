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
import { useRef, useState } from "react";
import { localStorageService } from "../../services/localStorage";
const KEY = "resentSearches";

export interface MobileSearchProps {
  searchsList: string[];
  onBack: () => void;
  onClearStorage: () => void;
  removeItem: (searchItem: string) => void;
  updateSearchInput: (item: string) => void;
  updateMobSearchActive: (bool: boolean) => void;
  isHeaderActive?: boolean;
  onMobileSearch?: () => void;
}

const MobileSearch: React.FC<MobileSearchProps> = (props) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [isDeleteIcon, setIsDeleteIcon] = useState(false);
  const [isSearchIcon, setIsSearchIcon] = useState(false);
  const [isMobSearchHeader, setIsMobSearchHeader] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const inputUpdate = (ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();
    let val = ev.target.value;
    setSearchInput(val);
    setIsDeleteIcon(true);
  };
  const upperCaseValue = () => {
    // update global state
    if (searchInput && searchInput.charAt(0) !== '"')
      setSearchInput((state) => '"' + state.toUpperCase() + '"');
    setIsDeleteIcon(false);
    setIsSearchIcon(true);
  };

  const onSubmitSearch = (
    ev:
      | React.ChangeEvent<HTMLFormElement>
      | React.ChangeEvent<HTMLInputElement>,
    searchInput: string
  ) => {
    ev.preventDefault();

    upperCaseValue();
    let finalString = searchInput.replaceAll('"', "");
    if (finalString !== "" && ref.current) {
      localStorageService.saveToStorage(KEY, finalString);
      props.updateSearchInput(finalString);
    }
    ev.target.blur();
    setIsMobSearchHeader(true);
    props.updateMobSearchActive(true);
  };

  const onFocusFunc = () => {
    setIsSearchIcon(false);
    setIsDeleteIcon(true);
    setSearchInput((state) => state.replaceAll('"', ""));
    props.onMobileSearch!();
    // props.updateMobSearchActive(false);
  };

  return (
    <MobileSearchContainer isHeaderActive={isMobSearchHeader}>
      <form
        onSubmit={(ev: React.ChangeEvent<HTMLFormElement>) =>
          onSubmitSearch(ev, searchInput)
        }
      >
        <SearchRow>
          <BackImg alt="" src={backIcon} onClick={props.onBack} />
          <input
            type="text"
            value={searchInput}
            placeholder="Search"
            onChange={inputUpdate}
            onBlur={(ev: React.ChangeEvent<HTMLInputElement>) =>
              onSubmitSearch(ev, searchInput)
            } // maybe on sumbit
            onFocus={onFocusFunc}
            ref={ref}
          ></input>
          {isDeleteIcon && <DeleteBtn alt="" src={ExitIcon} />}
          {isSearchIcon && <SearchBtn alt="" src={SearchIcon} />}
        </SearchRow>
      </form>
      {!isMobSearchHeader && (
        // {!props.isHeaderActive && (
        <RecentSearchesArea>
          <SearchSubtitle>
            <ResentSearch>resent searches</ResentSearch>
            <ClearBtn onClick={props.onClearStorage}>clear</ClearBtn>
          </SearchSubtitle>
          <ResentList>
            {props.searchsList
              ? props.searchsList.map((searchItem: string, index: number) => {
                  return (
                    <ResentSearchItem
                      key={index}
                      onClick={() => props.removeItem(searchItem)}
                    >
                      <SearchKey>{searchItem}</SearchKey>
                      <ExitImg alt="" src={ExitIcon} />
                    </ResentSearchItem>
                  );
                })
              : null}
          </ResentList>
        </RecentSearchesArea>
      )}
    </MobileSearchContainer>
  );
};

export default MobileSearch;
