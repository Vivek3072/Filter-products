import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./Stars.scss";

interface RatingsProps {
    rating: number;
    isSelected: boolean;
}

const Stars: React.FC<RatingsProps> = ({ rating, isSelected }) => {
    const filledStars = Array(rating).fill(null);
    const emptyStars = Array(5 - rating).fill(null);

    return (
        <div className="stars">
            {filledStars.map((_, index) => (
                <AiFillStar
                    key={index}
                    className={`fill ${isSelected ? 'selected' : ''}`}
                />
            ))}
            {emptyStars.map((_, index) => (
                <AiOutlineStar
                    key={index}
                    className={`empty ${isSelected ? 'selected' : ''}`}
                />
            ))}
        </div>
    );
};

export default Stars;
