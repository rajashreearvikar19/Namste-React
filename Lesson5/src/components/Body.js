import { useState } from 'react';
import Restaurant_card from './Restaurant_card';
import resList from '../utils/mockData';


const Body = () => {
    const [restaurantList, setResList] = useState(resList);
    return (
        <div className='body'>
            <div className='filter'>
                <button
                    className='filter-btn'
                    onClick={() => {
                        const filteredList = restaurantList.filter((res) => res.data.avgRating > 4.2);
                        setResList(filteredList)
                    }
                    }
                >
                    Top Rated restaurant
                </button>
            </div>
            <div className='res-container'>
                {restaurantList.map((restaurant) => (
                    <Restaurant_card key={restaurant.data.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
