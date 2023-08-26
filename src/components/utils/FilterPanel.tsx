import React from 'react';
import useSearchResults from '../../hooks/useSearchResults';
import './FilterPanel.scss';
import FilterPanelItem from './FilterPaneItem';
import FilterSelector from './FilterSelector';
import MockFilterSelector from './MockFilterSelector';
import Stars from './Stars';

const FilterPanel: React.FC = () => {
    const {
        filters,
        setFilters,
    } = useSearchResults();

    const togglePriceFilter = (filterKey: keyof typeof filters.price) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            price: {
                ...prevFilters.price,
                [filterKey]: !prevFilters.price[filterKey],
            },
        }));
    };


    const toggleRatingFilter = (index: number) => {
        setFilters((prevFilters) => {
            const updatedRatings = prevFilters.ratings.map((item, i) =>
                i === index ? !item : false
            );
            return {
                ...prevFilters,
                ratings: updatedRatings,
            };
        });
    };


    return (
        <div className="filter-panel">
            <FilterPanelItem title="BRAND">
                <MockFilterSelector>Mango</MockFilterSelector>
                <MockFilterSelector>H&M</MockFilterSelector>
            </FilterPanelItem>
            <FilterPanelItem title="PRICE RANGE">
                <FilterSelector
                    handleChange={() => togglePriceFilter('under1000')}
                    checked={filters.price.under1000}
                >
                    Under 1000
                </FilterSelector>
                <FilterSelector
                    handleChange={() => togglePriceFilter('is1000to2000')}
                    checked={filters.price.is1000to2000}
                >
                    1000 to 2000
                </FilterSelector>
                <FilterSelector
                    handleChange={() => togglePriceFilter('above2000')}
                    checked={filters.price.above2000}
                >
                    Above 3000
                </FilterSelector>
            </FilterPanelItem>
            <FilterPanelItem title="RATINGS">
                {[1, 2, 3, 4, 5].map((rating, index) => (
                    <FilterSelector
                        key={rating}
                        checked={filters.ratings[index]}
                        handleChange={() => toggleRatingFilter(index)}
                    >
                        <Stars rating={rating} isSelected={filters.ratings[index]} />
                    </FilterSelector>
                ))}
            </FilterPanelItem>

        </div>
    );
};

export default FilterPanel;
