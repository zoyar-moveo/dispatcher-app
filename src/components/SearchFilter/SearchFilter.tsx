import {} from "./styles";
import GlobalStyles from "../../GlobalStyles";
import { FilterContainer } from "../Filter/styles";

export interface SearchFilterProps {
  filterType: string;
  FilterList: string[];
}

const SearchFllter: React.FC<SearchFilterProps> = (props) => {
  return (
    <>
      <GlobalStyles />
      <FilterContainer></FilterContainer>
    </>
  );
};

export default SearchFllter;
