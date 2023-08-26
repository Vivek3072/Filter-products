import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Products } from "../../api/interfaces/Products";
import { getProducts } from "../../api/services/FakerApi";
import "./PopularSuggestions.scss";

const PopularSuggestions: React.FC = () => {
    const [items, setItems] = useState<Products[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadItems = async () => {
            setLoading(true);
            setItems(await getProducts(4));
            setLoading(false);
        };

        loadItems();
    }, []);
    return (
        <div className="popular-suggestions">
            <h2>Popular Suggestions</h2>
            {!loading ? (
                items.map((item, index) => (
                    <Link
                        key={item.id.toString() + index.toString()}
                        to={`/${item.title}`}
                    >
                        {item.title}
                    </Link>
                ))
            ) : (
                <SkeletonList />
            )}
        </div>
    );
};

const SkeletonList = () => {
    return (
        <div className="skeleton_list">
            {Array(4)
                .fill("NaN")
                .map((e, index) => (
                    <div key={e + index.toString()} className="skeleton_item" />
                ))}
        </div>
    );
};

export default PopularSuggestions;
