import { useEffect, useState } from 'react';
import Restaurant_card from './Restaurant_card';
import Shimmer from './Shimmer';
import { Link } from "react-router-dom";


const Body = () => {
    const [restaurantList, setResListOfRestuarnt] = useState([]);
    const [filteredResturant, setFilteredResturant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.965471030791193&lng=77.59644258767366&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setResListOfRestuarnt(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredResturant(json?.data?.cards[2]?.data?.data?.cards);

    }
    return (restaurantList?.length === 0) ? <Shimmer /> : (
        <div className='body'>
            <div className='filter'>
                <div className='search'>
                    <input type='text' className='search-box' value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button onClick={() => {
                        const filteredResturant = restaurantList.filter((res) => (res.data.name.toLowerCase()).includes(searchText.toLowerCase()))
                        setFilteredResturant(filteredResturant);
                    }}>search</button>
                </div>
                <button
                    className='filter-btn'
                    onClick={() => {
                        const filteredList = restaurantList.filter((res) => res.data.avgRating > 4.2);
                        setResListOfRestuarnt(filteredList)
                    }
                    }
                >
                    Top Rated restaurant
                </button>
            </div>
            <div className='res-container'>
                {filteredResturant.map((restaurant) => (
                    <Link key={restaurant.data.id}  to={"/restaurant/"+ restaurant.data.id}><Restaurant_card resData={restaurant} /></Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
