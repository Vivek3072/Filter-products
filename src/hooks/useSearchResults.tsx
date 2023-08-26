import { useContext } from "react";
import { searchResultsContext } from "./SearchResultsContext";

const useSeachResults = () => useContext(searchResultsContext);

export default useSeachResults;
