import { LOGO_LINK } from "../utils/constants";

const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}

export default Header;