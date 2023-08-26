import React from "react";
import LatestTrends from "../products/LatestTrends";
import PopularSuggestions from "../products/PopularSuggestions";
import "./BigSearchInput.scss";

const SearchHelper: React.FC = () => {
    return (
        <div className="search_helper_wrapper">
            <LatestTrends />
            <PopularSuggestions />
        </div>
    );
};

export default SearchHelper;
