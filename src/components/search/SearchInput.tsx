import React from "react";
import "./SearchResults.scss";
import { FiSearch } from "react-icons/fi";

interface Props {
  value: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
const SearchInput: React.FC<Props> = ({
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className="search_wrapper">
      <input
        type="text"
        className="search_input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <FiSearch className="search_icon" />
    </div>
  );
};

export default SearchInput;
