import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import {useParams} from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";

const RestaurantMenu = () => {
    const { resId } = useParams();  // Get the restaurant ID from the URL parameters
    // const [resInfo, setResInfo] = useState(null);  // State to hold the restaurant information
    // const [categoryCards, setCategoryCards] = useState([]);  // State to hold the category cards for the restaurant
    // useEffect(() => {
    //     fetchMenu();
    // }, []);  // Empty dependency array to run the effect only once when the component mounts

    // const fetchMenu = async () => {
    //     //TODO: resolve the 413 error.
    //     const apiUrl = "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=10576&catalog_qa=undefined&submitAction=ENTER";  // Construct the API URL using the restaurant ID
    //     // Prefix the URL with corsproxy.io
    //     const response = await fetch(
    //         "https://corsproxy.io/?url=" + encodeURIComponent(apiUrl)
    //     );
    //     const jsonData = await response.json();
    //     setResInfo(jsonData?.data?.cards[2]?.card?.card?.info || null);  // Extract the restaurant information from the API response or set it to null if the data is not available


    //     const allCategoryCards = jsonData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];  // Extract the menu items from the API response or use an empty array if the data is not available


    //     setCategoryCards(allCategoryCards);  // Update the state with the fetched category cards or an empty array if the data is not available
    //     console.log(allCategoryCards);
    // };

    
    /** Custom hook to fetch menu data */
    const resData = useRestaurantMenu(resId);
    const resInfo = resData?.cards[2]?.card?.card?.info || null;  // Extract the restaurant information from the API response or set it to null if the data is not available
    const allCategoryCards = resData?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];  // Extract the menu items from the API response or use an empty array if the data is not available
    return resInfo ? (
        <div>
            <h1>{resInfo.name}</h1>
            <p>{resInfo.areaName}</p>
            <p>{resInfo.avgRating}</p>
            <p>{resInfo.costForTwoMessage}</p>
            <h2>Menu</h2>
            <div className="menuCard-container">
                <div className="menu-card">
                    <div >
                        {allCategoryCards.length > 0 ? allCategoryCards.map((card, index) => {
                            if (card?.card?.card?.title) {
                                return (
                                    <div>
                                        <h2 key={card?.card?.card?.title}>{card?.card?.card?.title}</h2>
                                        {card?.card?.card?.itemCards ? 
                                        card?.card?.card?.itemCards.map((item) => {
                                            return <div key={item?.card?.info?.id}>{item?.card?.info?.name}</div>
                                        }) : card?.card?.card?.categories?.map((category) => {
                                            return <div>
                                                <h3 key={category?.categoryId}>{category?.title}</h3>
                                                {category?.itemCards?.map((item) => {
                                                    return <div key={item?.card?.info?.id}>{item?.card?.info?.name}</div>
                                                })}
                                            </div>
                                        })
                                        }
                                    </div>
                                );
                            } else if (index === 0) {
                                return <div key={card?.relevance?.[sectionId]}>veg/Non-Veg filter</div>
                            } else if (card?.card?.card?.type === "FSSAI") {
                                return <div key={card?.card?.card?.["@type"]}>FSSAI: {card?.card?.card?.text[0]}</div>
                            }
                        }) : <p>No menu items found.</p>}

                    </div>
                </div>
            </div>
        </div>
    ) : (
        <ShimmerUI />
    );
}

export default RestaurantMenu;