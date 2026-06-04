import { useState } from "react";  //named import

const SearchBar = (props) => {

    const { listOfRestaurants, filteredRestaurants, setFilteredRestaurants } = props;
    const [searchText, setSearchText] = useState("");

    const filterRestaurants = () => {
        const filteredList = listOfRestaurants.filter(restaurant => restaurant.title.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredRestaurants(filteredList);  //setter function to update the state of list of restaurants to trigger a re-render of the component with the filtered list of restaurants 

    }
    return (
        <div className="search">
            <div>
                <input type="text" placeholder="Search for restaurants or dishes..." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            </div>
            <div>
                <button onClick={filterRestaurants}>Search</button>
            </div>
        </div>
    );
}

export default SearchBar;