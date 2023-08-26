import { useEffect, useState } from "react";
import { Products } from "../../api/interfaces/Products";
import { getProducts } from "../../api/services/FakerApi";
import LatestTrendsItem from "./LatestTrendsItem";
import "./LatestTrends.scss";
import LatestTrendsItemSkeleton from "./LatestTrendsItemSkeleton";

const LatestTrends: React.FC = () => {
    const [items, setItems] = useState<Products[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadItems = async () => {
            setLoading(true);
            setItems(await getProducts(6));
            setLoading(false);
        };

        loadItems();
    }, []);

    return (
        <div className="latest-trends_wrapper">
            <h2>Latest Trends</h2>
            <div className="latest-trends_list">
                {!loading
                    ? items.map((item, index) => {
                        return (
                            <LatestTrendsItem
                                key={item.id.toString() + index.toString()}
                                product={item}
                            />
                        );
                    })
                    : Array(6)
                        .fill("NaN")
                        .map((e, index) => {
                            return <LatestTrendsItemSkeleton key={index} />;
                        })}
            </div>
        </div>
    );
};

export default LatestTrends;
