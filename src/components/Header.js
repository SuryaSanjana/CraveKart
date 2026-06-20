
import { LOGO_URL } from "../utils/constants";   //named import
import { useState } from "react";  //named import
import { Link } from "react-router-dom";  //named import
import useOnlineStatus from "../utils/useOnlineStatus";  //custom hook to check the online status of the user

const Header = () =>{
    const [loginState, setLoginState] = useState("Login");
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return <></>
    }
    return(
        <div id="header" className="header">
            {/* logo */}
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo" />
            </div>
            {/* Nav items */}
            <div className="nav-items">
                <ul>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <button className="login-btn" onClick={() =>{setLoginState(loginState === "Login" ? "Logout" : "Login")}}>
                       <i className="fas fa-user"></i> {loginState}
                    </button>
                </ul>
                
            </div>
        </div>
    );    
}

export default Header;