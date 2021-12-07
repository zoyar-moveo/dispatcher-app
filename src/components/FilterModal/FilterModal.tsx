import MobileFilter from "../MobileFilter/MobileFilter";
import ReactDOM from "react-dom";
import { FilterI } from "../MobileFilter/MobileFilter.types";
import { useSelector } from "react-redux";
import { useState } from "react";

export interface FilterModalProps {
  isEverything: boolean;
  toggleSearchIn: () => void;
  onCloseFilter: () => void;
  parentFilterUpdate: (filterType: string, filter: string | string[]) => void;
}

const FilterModal: React.FC<FilterModalProps> = (props) => {
  const sources: any = useSelector<any>((state) => state.sources.sources);
  const FilterCatagories: any = {
    FilterEverything: {
      Sources: {
        selected: ["All", "All"],
        options: sources.map((obj: any) => ({ ...obj, type: "Sources" })),
      },
      Language: {
        selected: ["All", "All"],
        options: [
          { id: "he", value: "Hebrew", type: "Language" },
          { id: "en", value: "English", type: "Language" },
          { id: "ru", value: "Russian", type: "Language" },
          { id: "es", value: "Spanish", type: "Language" },
        ],
      },
      Dates: { selected: ["All", "All"], options: [] },
    },
    FilterTop: {
      Country: {
        selected: ["il", "Israel"],
        options: [
          { id: "us", value: "United State", type: "Country" },
          { id: "il", value: "Israel", type: "Country" },
          { id: "ru", value: "Russia", type: "Country" },
          { id: "ar", value: "Argentina", type: "Country" },
          { id: "gb", value: "great Britain", type: "Country" },
          { id: "et", value: "Ethiopia", type: "Country" },
        ],
      },
      Category: {
        selected: ["All", "All"],
        options: [
          { id: "general", value: "General", type: "Category" },
          { id: "business", value: "Business", type: "Category" },
          { id: "health", value: "Health", type: "Category" },
          { id: "entertainment", value: "Entertainment", type: "Category" },
          { id: "science", value: "Science", type: "Category" },
          { id: "sports", value: "Sports", type: "Category" },
          { id: "technology", value: "Technology", type: "Category" },
        ],
      },
      Sources: {
        selected: ["All", "All"],
        options: sources.map((obj: any) => ({ ...obj, type: "Sources" })),
      },
    },
  };

  const [filterTopSelected, setFilterTopSelected] = useState({
    Sources: ["All", "All"],
    Country: ["All", "All"],
    Category: ["All", "All"],
  });
  const [filterEverySelected, setFilterEverySelected] = useState({
    Sources: ["All", "All"],
    Language: ["All", "All"],
    Dates: ["All", "All"],
  });

  const onFilterBack = () => {};

  const updateSelceted = (id: any, option: any, type: any) => {
    switch (type) {
      case "Sources":
        setFilterTopSelected((state: any) => ({
          ...state,
          Sources: [id, option],
        }));
        setFilterEverySelected((state: any) => ({
          ...state,
          Sources: [id, option],
        }));
        return;
      case "Country":
        setFilterTopSelected((state: any) => ({
          ...state,
          Country: [id, option],
        }));
        return;
      case "Category":
        setFilterTopSelected((state: any) => ({
          ...state,
          Category: [id, option],
        }));
        return;
      case "Language":
        setFilterEverySelected((state: any) => ({
          ...state,
          Language: [id, option],
        }));
        return;
      case "Dates":
        setFilterEverySelected((state: any) => ({
          ...state,
          Dates: option,
        }));
        return;
    }
  };

  return (
    <>
      {ReactDOM.createPortal(
        <MobileFilter
          isEverything={props.isEverything}
          toggleSearchIn={props.toggleSearchIn}
          FilterCatagories={FilterCatagories}
          onFilterBack={onFilterBack}
          onCloseFilter={props.onCloseFilter}
          updateSelceted={updateSelceted}
          filterTopSelected={filterTopSelected}
          filterEverySelected={filterEverySelected}
          parentFilterUpdate={props.parentFilterUpdate}
        />,
        document.getElementById("filter-modal")!
      )}
    </>
  );
};

export default FilterModal;
