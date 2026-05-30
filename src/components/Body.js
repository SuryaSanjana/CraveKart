import SearchBar from "./SearchBar";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";  //named import


const Body = () =>{
    //useState hook to manage the state of top rated restaurants
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    //function to handle the click event of top rated button
    const handleTopRatedClick = () => {
        const filteredList = listOfRestaurants.filter(restaurant => restaurant.info.avgRating >= 4.0);
        setListOfRestaurants(filteredList);  //setter function to update the state of top rated restaurants to trigger a re-render of the component with the filtered list of top rated restaurants
    }
return (
    
        <div id="body" className="body">
            <SearchBar />

            <div id="top-rated" className="filter-btn">
                <button className="top-rated-btn"  onClick={handleTopRatedClick}>
                    Top Rated Restaurants
                </button>
            </div>  
            <div className="restaurant-container">
                {(listOfRestaurants.map((restaurant) => {
                    return <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                }))}
            </div>
    </div>
);
}

export default Body;