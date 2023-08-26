import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./BigSearchInput.scss";
import SearchHelper from "./SearchHelper";

interface Props {
    value: string,
    placeholder: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

const SearchBoxInput: React.FC<Props> = ({
    value,
    placeholder,
    onChange,
}: Props) => {
    const [isInputClicked, setIsInputClicked] = useState<boolean>(false);

    const handleInputClick = () => {
        setIsInputClicked(true);
    };
    return (
        <>
            <div className="big_search_wrapper">
                <input
                    type="text"
                    className="big_search_input"
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    onClick={handleInputClick}
                />
                <FaSearch className="big_search_icon" />
            </div>

            {isInputClicked && <SearchHelper />}
        </>
    );
};

export default SearchBoxInput;
