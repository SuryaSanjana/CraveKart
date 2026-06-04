import SearchBar from "./SearchBar";
import RestaurantCard from "./RestaurantCard";

import ShimmerUI from "./ShimmerUI";
import { useState, useEffect } from "react";  //named import


const Body = () => {
    //useState hook to manage the state of top rated restaurants
    const [listOfRestaurants, setListOfRestaurants] = useState([]);  //initial state is an empty array
    const [filter, setFilter] = useState(false);  //state to manage the filter button click event
    const [filteredRestaurants, setFilteredRestaurants] = useState(listOfRestaurants);  //state to manage the filtered list of restaurants based on the search text

    //function to handle the click event of top rated button
    const handleTopRatedClick = () => {
        const filteredList = filteredRestaurants.filter(restaurant => restaurant.rating >= 4.0);
        setFilteredRestaurants(filteredList);  //setter function to update the state of filtered restaurants to trigger a re-render of the component with the filtered list of top rated restaurants
        setFilter(true);  //update the filter state to true to indicate that the filter is applied
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
        setFilteredRestaurants(jsonData.products);  // Initialize filtered restaurants with all restaurants
        setFilter(false);  //update the filter state to false to indicate that the filter is removed
        console.log(jsonData.products);
    }

    //conditional rendering to show the shimmer UI while the data is being fetched and to show the list of restaurants once the data is fetched
    if (listOfRestaurants.length === 0) {
        return <ShimmerUI />
    }
    return (

        <div id="body" className="body">
            <SearchBar listOfRestaurants={listOfRestaurants} filteredRestaurants={filteredRestaurants} setFilteredRestaurants={setFilteredRestaurants} />

            <div id="top-rated" className="filter-btn">
                <button className="top-rated-btn" onClick={handleTopRatedClick} disabled={filter}>
                    <i className="fas fa-star"></i> Top Rated Restaurants
                </button>
                {/*TODO:  Need a better refinement of remove filter */}
                <button className="remove-filter-btn" onClick={() =>{setFilteredRestaurants(listOfRestaurants); setFilter(false);}} disabled={!filter}>
                    <i className="fas fa-filter"></i> Remove Filter
                </button>
            </div>
            <div className="restaurant-container">
                {
                    (filteredRestaurants.length > 0)
                    ?   filteredRestaurants.map((product) => { return <RestaurantCard key={product?.id} resData={product} /> })
                    :   <p>No restaurants found.</p>
                }
            </div>
        </div>
    );
}

export default Body;