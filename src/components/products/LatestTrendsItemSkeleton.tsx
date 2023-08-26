import React from "react";
import "./LatestTrendsItemSkeleton.scss";

const LatestTrendsItemSkeleton: React.FC = () => {
    return (
        <div className="latest-trends-item-skeleton">
            <div className="image-placeholder" />
            <div className="title-placeholder" />
        </div>
    );
};

export default LatestTrendsItemSkeleton;
