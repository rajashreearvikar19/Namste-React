import { CDN_LINK } from "../utils/constants";

const Restaurant_card = (props) => {
    const { resData } = props
    const { name, cuisines, cloudinaryImageId, avgRating, deliveryTime } = resData?.info;
    return (
        <div className='res-card'>
            <img
                className='res-logo'
                src={CDN_LINK + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4> {avgRating} ratings</h4>
            <h4>{deliveryTime}mins</h4>
        </div>
    )
}

export default Restaurant_card;