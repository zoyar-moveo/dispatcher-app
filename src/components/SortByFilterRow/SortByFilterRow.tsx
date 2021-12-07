import { IconBtn, SortByArea, SortByFilterRowContainer } from "./styles";
import FilterIcon from "./assets/filter.svg";
import ForwardIcon from "./assets/Forward.svg";
import Filter from "../Filter/Filter";

const SortByFilterRow: React.FC<{
  onMobileTabletFilter: () => void;
  isEverything: boolean;
  parentFilterUpdate: (filterType: string, filter: string | string[]) => void;
}> = (props) => {
  const SortByOpt = [
    { id: "popularity", value: "Popularity" },
    { id: "publishedAt", value: "Resent" },
    { id: "relevancy", value: "Relevancy" },
  ];

  return (
    <SortByFilterRowContainer isEverything={props.isEverything}>
      {props.isEverything && (
        <>
          {/* <SortByArea>
            Sort By
            <IconBtn alt="" src={ForwardIcon} IconType="forward" />
          </SortByArea> */}
          <Filter
            isSortByMobile={true}
            filterSort="secondary"
            filterType="sortBy"
            filtersList={SortByOpt}
            parentFilterUpdate={props.parentFilterUpdate}
            isDisabled={false}
          ></Filter>
        </>
      )}
      <IconBtn
        alt=""
        src={FilterIcon}
        IconType="filter"
        onClick={props.onMobileTabletFilter}
      />
    </SortByFilterRowContainer>
  );
};

export default SortByFilterRow;
