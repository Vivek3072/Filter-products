import { createContext, ReactNode, useEffect, useState } from "react";
import { Products } from "../api/interfaces/Products";
import { SearchResultsContext } from "../api/interfaces/Result";
import { getProducts } from "../api/services/FakerApi";

const searchResultsContext = createContext<SearchResultsContext>(
    {} as SearchResultsContext
);

const SearchResultsProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<Products[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const [filters, setFilters] = useState({
        price: {
            under1000: false,
            is1000to2000: false,
            above2000: false,
        },
        ratings: Array(5).fill(false), // An array to store star rating filters
    });

    const applyFilters = (product: Products) => {
        const { price, ratings } = filters;

        const priceFilter =
            !price.under1000 &&
                !price.is1000to2000 &&
                !price.above2000
                ? true
                : (price.under1000 && parseInt(product.price) < 1000) ||
                (price.is1000to2000 &&
                    parseInt(product.price) >= 1000 &&
                    parseInt(product.price) <= 2000) ||
                (price.above2000 && parseInt(product.price) > 3000);

        const ratingsFilter = ratings.every((isStarSelected, index) => !isStarSelected || product.rating === index + 1);

        return priceFilter && ratingsFilter;
    };

    const filteredProducts = products.filter(applyFilters);

    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);
            setProducts(await getProducts());
            setLoading(false);
        };
        loadProducts();
    }, []);

    return (
        <searchResultsContext.Provider
            value={{
                products: filteredProducts,
                setProducts,
                loading,
                setLoading,
                filters,
                setFilters,
            }}
        >
            {children}
        </searchResultsContext.Provider>
    );
};

export default SearchResultsProvider;
export { searchResultsContext };
