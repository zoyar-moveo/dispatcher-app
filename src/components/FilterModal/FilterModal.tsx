import MobileFilter from "../MobileFilter/MobileFilter";
import ReactDOM from "react-dom";
import { FilterI } from "../MobileFilter/MobileFilter.types";

export interface FilterModalProps {
  isEverything: boolean;
  toggleSearchIn: () => void;
  onCloseFilter: () => void;
}

const FilterModal: React.FC<FilterModalProps> = (props) => {
  const FilterCatagories: FilterI = {
    FilterEverything: {
      Sources: { selected: "Ynet", options: ["Ynet", "walla", "Mako"] },
      Language: { selected: "All", options: ["Hebrew", "English"] },
      Dates: { selected: "All", options: ["1/1/2021", "31/1/2021"] },
    },
    FilterTop: {
      Country: { selected: "Israel", options: ["Israel", "USA"] },
      Category: {
        selected: "Finance",
        options: ["Health", "Politics", "Finance"],
      },
      Sources: { selected: "All", options: ["Ynet", "walla", "Mako"] },
    },
  };

  const onFilterBack = () => {};

  return (
    <>
      {ReactDOM.createPortal(
        <MobileFilter
          isEverything={props.isEverything}
          toggleSearchIn={props.toggleSearchIn}
          FilterCatagories={FilterCatagories}
          onFilterBack={onFilterBack}
          onCloseFilter={props.onCloseFilter}
        />,
        document.getElementById("filter-modal")!
      )}
    </>
  );
};

export default FilterModal;
