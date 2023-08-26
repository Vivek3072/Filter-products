import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBoxInput from "../search/SearchBoxInput";
import "./Home.scss";
import Header from "../header/Header";

const Home: React.FC = () => {
    const [queryVal, setQueryVal] = useState<string>("");
    const navigator = useNavigate();
    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setQueryVal(e.target.value);
    };
    const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        navigator(`/${queryVal}`);
    };

    return (
        <>
            <Header />
            <div className="home">
                <div className="home_wrapper">
                    <form onSubmit={handleFormSubmit}>
                        <SearchBoxInput
                            value={queryVal}
                            onChange={handleInputChange}
                            placeholder="Search for products"
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Home;
