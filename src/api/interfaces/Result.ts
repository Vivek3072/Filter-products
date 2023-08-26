import { Products } from "./Products";

export type SearchResultsContext = {
    products: Products[];
    setProducts: React.Dispatch<React.SetStateAction<Products[]>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    filters: {
        price: {
            under1000: boolean;
            is1000to2000: boolean;
            above2000: boolean;
        };
        ratings: boolean[];
    };
    setFilters: React.Dispatch<
        React.SetStateAction<{
            price: {
                under1000: boolean;
                is1000to2000: boolean;
                above2000: boolean;
            };
            ratings: boolean[];
        }>
    >;
};
