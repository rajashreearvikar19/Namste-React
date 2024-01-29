import { useEffect, useState } from 'react';
import Restaurant_card from './Restaurant_card';
import Shimmer from './Shimmer';
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';


const Body = () => {
    const [restaurantList, setResListOfRestuarnt] = useState([]);
    const [filteredResturant, setFilteredResturant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData= async()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const response= await data.json();
        setResListOfRestuarnt(response.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredResturant(response.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
       }
    
    const onlineStatus=useOnlineStatus();
    if(!onlineStatus){
        return(
            <h1>"oopss ! something went wrong please check your internet connection"</h1>
        )
    }
    return (restaurantList?.length === 0) ? <Shimmer /> : (
        <div className='body'>
            <div className='filter'>
                <div className='search'>
                    <input type='text' className='search-box' value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button onClick={() => {
                        const filteredResturant = restaurantList.filter((res) => (res.info.name.toLowerCase()).includes(searchText.toLowerCase()))
                        console.log(filteredResturant);
                        setFilteredResturant(filteredResturant);
                    }}>search</button>
                </div>
                <button
                    className='filter-btn'
                    onClick={() => {
                        const filteredList = restaurantList.filter((res) => res.info.avgRating > 4.2);
                        console.log(filteredList);
                        setFilteredResturant(filteredList)
                    }
                    }
                >
                    Top Rated restaurant
                </button>
            </div>
            <div className='res-container'>
                {filteredResturant.map((restaurant) => (
                    <Link key={restaurant.info.id}  to={"/restaurant/"+ restaurant.info.id}><Restaurant_card resData={restaurant} /></Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
