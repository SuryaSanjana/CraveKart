
import { LOGO_URL } from "../utils/constants";   //named import
import { useState } from "react";  //named import

const Header = () =>{
    const [loginState, setLoginState] = useState("Login");
    return(
        <div id="header" className="header">
            {/* logo */}
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo" />
            </div>
            {/* Nav items */}
            <div className="nav-items">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    <li><a href="#cart">Cart</a></li> 
                    <button className="login-btn" onClick={() =>{setLoginState(loginState === "Login" ? "Logout" : "Login")}}>
                       <i className="fas fa-user"></i> {loginState}
                    </button>
                </ul>
                
            </div>
        </div>
    );    
}

export default Header;