import SearchBar from "./SearchBar";
import RestaurantCard from "./RestaurantCard";

import ShimmerUI from "./ShimmerUI";
import { useState, useEffect } from "react";  //named import


const Body = () => {
    //useState hook to manage the state of top rated restaurants
    const [listOfRestaurants, setListOfRestaurants] = useState([]);  //initial state is an empty array
    //function to handle the click event of top rated button
    const handleTopRatedClick = () => {
        const filteredList = listOfRestaurants.filter(restaurant => restaurant.info.avgRating >= 4.0);
        setListOfRestaurants(filteredList);  //setter function to update the state of top rated restaurants to trigger a re-render of the component with the filtered list of top rated restaurants
    }

    //fetching data from API by bypassing the CORS policy
    useEffect(() => {
        fetchData();

    }, []);
    const fetchData = async () => {
        const data = await fetch("https://dummyjson.com/products",
        );
        const jsonData = await data.json();
        setListOfRestaurants(jsonData.products);
        console.log(jsonData.products);
    }

    if(listOfRestaurants.length === 0) {
        return <ShimmerUI />
    }
    return (

        <div id="body" className="body">
            <SearchBar />

            <div id="top-rated" className="filter-btn">
                <button className="top-rated-btn" onClick={handleTopRatedClick}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="restaurant-container">
                {(listOfRestaurants.map((product) => {
                    return <RestaurantCard key={product?.id} resData={product} />
                }))}
            </div>
        </div>
    );
}

export default Body;