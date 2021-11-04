import { IconBtn, SortByArea, SortByFilterRowContainer } from "./styles";
import FilterIcon from "./assets/filter.svg";
import ForwardIcon from "./assets/Forward.svg";

const SortByFilterRow: React.FC<{ onMobileTabletFilter: () => void }> = (
  props
) => {
  return (
    <SortByFilterRowContainer>
      <SortByArea>
        Sort By
        <IconBtn alt="" src={ForwardIcon} IconType="forward" />
      </SortByArea>
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
