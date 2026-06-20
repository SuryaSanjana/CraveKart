import { useState, useEffect } from "react";
const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);  // State to store restaurant information

    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async () =>{
        const url="https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=1140165&catalog_qa=undefined&submitAction=ENTER"
        const apiUrl = "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER";  // Construct the API URL using the restaurant ID
        //Prefix the URL with corsproxy.io
        const response = await fetch(
            "https://corsproxy.io/?url=" + encodeURIComponent(url)
        );
        const data = await response.json();
        //  const jsonData = await data.json();
        setResInfo(data?.data);  // Extract the restaurant information from the API response or set it to null if the data is not available
        console.log(data?.data);
    }
    return resInfo;
}
    
export default useRestaurantMenu;