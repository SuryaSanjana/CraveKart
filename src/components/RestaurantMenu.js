import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import {useParams} from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ItemsList from "./ItemsList";

const RestaurantMenu = () => {
    const { resId } = useParams();  // Get the restaurant ID from the URL parameters
    
    /** Custom hook to fetch menu data */
    const resData = useRestaurantMenu(resId);
    const resInfo = resData?.cards[2]?.card?.card?.info || null;  // Extract the restaurant information from the API response or set it to null if the data is not available
    const allCategoryCards = resData?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((card) =>  card?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") || [];  // Extract the menu items from the API response based on type  or use an empty array if the data is not available

    return resInfo ? (
        <div >
            <h1 className="font-black text-2xl text-center">{resInfo.name}</h1>
            <div className="justify-items-center  flex-1 text-center" >
                <span>{resInfo.areaName} </span>
                <span>{resInfo.avgRating}</span>
            
                <span> {resInfo.costForTwoMessage}</span>
            </div>
            <h2>Menu</h2>
            <ItemsList categoryCards= {allCategoryCards} />
        </div>
    ) : (
        <ShimmerUI />
    );
}

export default RestaurantMenu;