import { useEffect, useState } from "react";
import {
  FiltertContainer,
  DropDownList,
  DropDownItem,
  CurrFilter,
} from "./styles";
import Arrow from "./assets/Forward.svg";
import GlobalStyles from "../../GlobalStyles";
import React from "react";

export interface FilterProps {
  text: string;
  filterType: string;
  filtersList: string[];
}

const Filter: React.FC<FilterProps> = ({ text, filterType, filtersList }) => {
  const [IsDropDownOpen, SetIsDropDownOpen] = useState(false);
  const [currFilter, setCurrFilter] = useState(filterType);

  useEffect(() => {
    SetIsDropDownOpen(false);
  }, [currFilter]);

  return (
    <>
      <GlobalStyles />
      <FiltertContainer>
        <CurrFilter onClick={() => SetIsDropDownOpen((state) => !state)}>
          <div>{currFilter}</div>
          <img alt="" src={Arrow} />
        </CurrFilter>
      </FiltertContainer>
      {IsDropDownOpen && (
        <FiltertContainer>
          <DropDownList>
            {filtersList.map((filterItem) => (
              <DropDownItem onClick={() => setCurrFilter(filterItem)}>
                {filterItem}
              </DropDownItem>
            ))}
          </DropDownList>
        </FiltertContainer>
      )}
    </>
  );
};

export default Filter;
