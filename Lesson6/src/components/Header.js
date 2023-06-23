import { useState } from "react";
import { LOGO_LINK } from "../utils/constants";

const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("login");
    return (
        <div className='header'>
            <div className='logo-container'>
                <img src={LOGO_LINK} className='logo'></img>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        (btnNameReact == "login") ? setbtnNameReact("logout") : setbtnNameReact("login")
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;