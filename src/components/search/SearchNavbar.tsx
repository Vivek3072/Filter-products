import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./SearchResults.scss";
import SearchInput from "./SearchInput";

const SearchNavbar: React.FC = () => {
  const { param } = useParams();

  const [query, setQuery] = useState<string>(param || "");
  const navigator = useNavigate();
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.target.value);
  };
  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    navigator(`/${query}`);
  };
  return (
    <>
      <div className="search-navbar">
        <form onSubmit={handleFormSubmit}>
          <SearchInput
            onChange={handleInputChange}
            value={query}
            placeholder="Search for products"
          />
        </form>
      </div>
    </>
  );
};

export default SearchNavbar;
