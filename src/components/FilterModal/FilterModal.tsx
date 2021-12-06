import MobileFilter from "../MobileFilter/MobileFilter";
import ReactDOM from "react-dom";
import { FilterI } from "../MobileFilter/MobileFilter.types";
import { useSelector } from "react-redux";

export interface FilterModalProps {
  isEverything: boolean;
  toggleSearchIn: () => void;
  onCloseFilter: () => void;
}

const FilterModal: React.FC<FilterModalProps> = (props) => {
  const sources: any = useSelector<any>((state) => state.sources.sources);
  const FilterCatagories: any = {
    FilterEverything: {
      Sources: { selected: "All", options: sources },
      Language: {
        selected: "All",
        options: [
          { id: "he", value: "Hebrew" },
          { id: "en", value: "English" },
          { id: "ru", value: "Russian" },
          { id: "es", value: "Spanish" },
        ],
      },
      Dates: { selected: "All", options: [] },
    },
    FilterTop: {
      Country: {
        selected: "Israel",
        options: [
          { id: "us", value: "United State" },
          { id: "il", value: "Israel" },
          { id: "ru", value: "Russia" },
          { id: "ar", value: "Argentina" },
          { id: "gb", value: "great Britain" },
          { id: "et", value: "Ethiopia" },
        ],
      },
      Category: {
        selected: "All",
        options: [
          { id: "general", value: "General" },
          { id: "business", value: "Business" },
          { id: "health", value: "Health" },
          { id: "entertainment", value: "Entertainment" },
          { id: "science", value: "Science" },
          { id: "sports", value: "Sports" },
          { id: "technology", value: "Technology" },
        ],
      },
      Sources: { selected: "All", options: sources },
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
