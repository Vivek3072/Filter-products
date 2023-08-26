import FilterPanel from "../utils/FilterPanel";
import ProductsPanel from "../products//ProductsPanel";
import SearchNavbar from "./SearchNavbar";
import SearchResultsProvider from "../../hooks/SearchResultsContext";
import "./SearchResults.scss";
import Header from "../header/Header";

const SearchResults: React.FC = () => {
  return (
    <SearchResultsProvider>
      <Header />
      <div className="search_results">
        <SearchNavbar />
        <div className="panel_wrapper">
          <FilterPanel />
          <ProductsPanel />
        </div>
      </div>
    </SearchResultsProvider>
  );
};

export default SearchResults;
