import "./App.css";
import SearchFllter from "./components/SearchFilter/SearchFilter";
import SearchIcon from "./components/SearchFilter/assets/search.svg";
import ForwardIcon from "./components/SearchFilter/assets/Forward.svg";

function App() {
  return (
    <>
      <SearchFllter
        filterType={"Everything"}
        FilterList={["Top Headlines", "Everything"]}
        SearchsList={["Bitcoin", "Stockes", "Weather"]}
        searchIcon={SearchIcon}
        forwardIcon={ForwardIcon}
      ></SearchFllter>
    </>
  );
}

export default App;
