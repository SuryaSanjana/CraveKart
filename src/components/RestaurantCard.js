import { CDN_URL } from "../utils/constants";   //named import

const RestaurantCard = (props) => {
    const { resData } = props;

    return (

        <div className="restaurant-card">
            <img className="restaurant-image" src={CDN_URL} alt={resData.title} />
            <h3 className="restaurant-name">{resData.title}</h3>
            <p className="restaurant-rating">Rating: {resData.rating}</p>
        </div>
    );
}

export default RestaurantCard;