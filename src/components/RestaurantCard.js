import { CDN_URL } from "../utils/constants";   //named import

const RestaurantCard = (props) => {
    const { resData } = props;

    return (

        <div className="restaurant-card">
            <img className="restaurant-image" src={CDN_URL + resData.info?.cloudinaryImageId} alt={resData.info?.name} />
            <h3 className="restaurant-name">{resData.info?.name}</h3>
            <p className="restaurant-rating">Rating: {resData.info?.avgRating}</p>
            <p className="restaurant-cuisine">{resData.info?.cuisines?.join(", ")}</p>
            <p className="restaurant-cost">{resData.info?.costForTwo}</p>
            <p className="restaurant-delivery-time">{resData.info?.sla?.slaString}</p>
        </div>
    );
}

export default RestaurantCard;