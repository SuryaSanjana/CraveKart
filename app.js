import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Header = () =>
(
    <div id="header" className="header">
        {/* logo */}
        <div className="logo-container">
            <img className="logo" src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" alt="logo" />
        </div>
        {/* Nav items */}
        <div className="nav-items">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#cart">Cart</a></li>
            </ul>
        </div>
    </div>
);

const SearchBar = () =>
(
    <div className="Search">
        <div>
            <input type="text" placeholder="Search for restaurants or dishes..." />
        </div>
        <div>
            <button>Search</button>
        </div>
    </div>
);

const RestaurantCard = (props) =>{
      const { resData } = props;
return (
  
    <div className="restaurant-card">
        <img className="restaurant-image" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/8/12/ac6ce3bc-6b4c-42be-b340-592685820ab0_e8d1412a-2044-43df-8a77-e81aa310a775.jpg" alt={resData.info.name} />
        <h3 className="restaurant-name">{resData.info.name}</h3>
        <p className="restaurant-cuisine">{resData.info.cuisines.join(", ")}</p>
        <p className="restaurant-rating">Rating: {resData.info.avgRating}</p>
    </div>
);
}



//swiggy api data
const resList = [{
    info: {
        id: "123456",
        name: "Pizza Paradise",
        cloudinaryImageId:
            "ac6ce3bc-6b4c-42be-b340-592685820ab0_e8d1412a-2044-43df-8a77-e81aa310a775.jpg",
        locality: "MG Road",
        areaName: "Central District",
        costForTwo: "₹400 for two",
        cuisines: ["Pizza", "Italian", "Fast Food"],
        avgRating: 4.3,
        avgRatingString: "4.3",
        totalRatingsString: "10K+ ratings",
        veg: false,
        sla: {
            deliveryTime: 30,
            lastMileTravel: 3.5,
            slaString: "30 mins",
        },
        aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100",
        },
    },
},

{
    info: {
        id: "123457",
        name: "Pizza Paradise",
        cloudinaryImageId:
            "ac6ce3bc-6b4c-42be-b340-592685820ab0_e8d1412a-2044-43df-8a77-e81aa310a775.jpg",
        locality: "MG Road",
        areaName: "Central District",
        costForTwo: "₹400 for two",
        cuisines: ["Pizza", "Italian", "Fast Food"],
        avgRating: 4.3,
        avgRatingString: "4.3",
        totalRatingsString: "10K+ ratings",
        veg: false,
        sla: {
            deliveryTime: 30,
            lastMileTravel: 3.5,
            slaString: "30 mins",
        },
        aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100",
        },
    },
},

{
    info: {
        id: "123458",
        name: "Pizza Paradise",
        cloudinaryImageId:
            "ac6ce3bc-6b4c-42be-b340-592685820ab0_e8d1412a-2044-43df-8a77-e81aa310a775.jpg",
        locality: "MG Road",
        areaName: "Central District",
        costForTwo: "₹400 for two",
        cuisines: ["Pizza", "Italian", "Fast Food"],
        avgRating: 4.3,
        avgRatingString: "4.3",
        totalRatingsString: "10K+ ratings",
        veg: false,
        sla: {
            deliveryTime: 30,
            lastMileTravel: 3.5,
            slaString: "30 mins",
        },
        aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100",
        },
    },
},


{
    info: {
        id: "123456",
        name: "Pizza Paradise",
        cloudinaryImageId:
            "ac6ce3bc-6b4c-42be-b340-592685820ab0_e8d1412a-2044-43df-8a77-e81aa310a775.jpg",
        locality: "MG Road",
        areaName: "Central District",
        costForTwo: "₹400 for two",
        cuisines: ["Pizza", "Italian", "Fast Food"],
        avgRating: 4.3,
        avgRatingString: "4.3",
        totalRatingsString: "10K+ ratings",
        veg: false,
        sla: {
            deliveryTime: 30,
            lastMileTravel: 3.5,
            slaString: "30 mins",
        },
        aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100",
        },
    },
},


{
    info: {
        id: "123456",
        name: "Pizza Paradise",
        cloudinaryImageId:
            "ac6ce3bc-6b4c-42be-b340-592685820ab0_e8d1412a-2044-43df-8a77-e81aa310a775.jpg",
        locality: "MG Road",
        areaName: "Central District",
        costForTwo: "₹400 for two",
        cuisines: ["Pizza", "Italian", "Fast Food"],
        avgRating: 4.3,
        avgRatingString: "4.3",
        totalRatingsString: "10K+ ratings",
        veg: false,
        sla: {
            deliveryTime: 30,
            lastMileTravel: 3.5,
            slaString: "30 mins",
        },
        aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100",
        },
    },
},


{
    info: {
        id: "123456",
        name: "Pizza Paradise",
        cloudinaryImageId:
            "ac6ce3bc-6b4c-42be-b340-592685820ab0_e8d1412a-2044-43df-8a77-e81aa310a775.jpg",
        locality: "MG Road",
        areaName: "Central District",
        costForTwo: "₹400 for two",
        cuisines: ["Pizza", "Italian", "Fast Food"],
        avgRating: 4.3,
        avgRatingString: "4.3",
        totalRatingsString: "10K+ ratings",
        veg: false,
        sla: {
            deliveryTime: 30,
            lastMileTravel: 3.5,
            slaString: "30 mins",
        },
        aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100",
        },
    },
}
]
const RestaurantList = () =>
(
    <div className="restaurant-container">
        {resList.map((restaurant) => {
            return <RestaurantCard key={restaurant.info.id} resData = {restaurant} />
        })}     
    </div>
);

const Footer = () =>
(
    <div id="footer" className="footer">
        <p>&copy; 2024 CraveKart. All rights reserved.</p>
    </div>
);

const Body = () =>
(
    <div id="body" className="body">
        <SearchBar />
        <RestaurantList />
        <Footer />
    </div>


);

const AppLayout = () =>
(
    <div id="app-layout" className="app-layout">
        <Header />
        <Body />
    </div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
