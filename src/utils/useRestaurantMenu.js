import { useState } from "react";
const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);  // State to store restaurant information

    const useEffect= (()=>{
        fetchData();
    });
    const fetchData = async () =>{
        const apiUrl = "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER";  // Construct the API URL using the restaurant ID
        // Prefix the URL with corsproxy.io
        const response = await fetch(
            "https://corsproxy.io/?url=" + encodeURIComponent(apiUrl)
        );
        const jsonData = await response.json();
        setResInfo(jsonData?.data);  // Extract the restaurant information from the API response or set it to null if the data is not available
    }
    return resInfo;
}