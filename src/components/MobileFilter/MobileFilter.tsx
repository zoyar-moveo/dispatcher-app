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

const MobileFilter: React.FC<MobileFilterProps> = (props) => {
  const [isInnerFilter, setIsInnerFilter] = useState(false);
  const [title, setTitle] = useState<EveryKey | TopKey | null>(null);

  const getFilterType = () => {
    return props.isEverything
      ? props.FilterCatagories.FilterEverything
      : props.FilterCatagories.FilterTop;
  };

  const OpenCurrFilter = (key: EveryKey | TopKey) => {
    setIsInnerFilter(true);
    setTitle(key);
  };

  const onFilterBack = () => {
    setIsInnerFilter(false);
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

  const updateFilter = (option: string) => {
    // update options
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
                      (option: string, idx: number) => (
                        <CategoryItem
                          key={idx}
                          onClick={() => updateFilter(option)}
                        >
                          {option}
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
                  </span>
                </CategoryItem>
                {Object.entries(getFilterType()).map(
                  ([key, value]: any, idx) => (
                    <>
                      <CategoryItem
                        onClick={() => OpenCurrFilter(key)}
                        key={idx}
                      >
                        <span>{key}</span>
                        <span>{value.selected}</span>
                      </CategoryItem>
                    </>
                  )
                )}
              </>
            )}
          </ListArea>
        </TitleListContainer>
        <BtnContiner>
          <Button
            text={"VIEW RESULTS"}
            isArrow={false}
            btnType={btnTypeList.primary}
            onClickFunc={() => {}}
          />
        </BtnContiner>
      </MobileFilterContainer>
    </div>
  );
};

export default MobileFilter;
