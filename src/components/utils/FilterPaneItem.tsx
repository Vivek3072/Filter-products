import React, { ReactNode, useState, useEffect } from "react";
import "./FilterPanel.scss";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

interface Props {
    title: string;
    children: ReactNode;
}

const FilterPanelItem: React.FC<Props> = ({
    title,
    children,
}) => {
    const isMobile = window.innerWidth <= 780;
    const [collapsed, setCollapsed] = useState<boolean>(isMobile);

    useEffect(() => {
        const handleResize = () => {
            setCollapsed(window.innerWidth <= 780);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className="filter-panel-item">
            <button
                type="button"
                className={`item_tile ${collapsed ? "collapsed" : ""}`}
                onClick={toggleCollapsed}
            >
                {title}
                {collapsed ? <BiChevronDown /> : <BiChevronUp />}
            </button>
            <div className={`item_content ${collapsed ? "collapsed" : ""}`}>
                {children}
            </div>
        </div>
    );
};

export default FilterPanelItem;
