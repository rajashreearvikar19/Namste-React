import useResturantMenu from "../utils/useResturantMenu";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";


const RestrauantMenu = () => {
    const { resId } = useParams();
    const resInfo= useResturantMenu(resId);

    if (resInfo === null) {
        return (
            <Shimmer />
        )
    }

    const { name, costForTwoMessage, cuisines } = resInfo.cards[0].card.card.info;
    console.log(cuisines, costForTwoMessage);
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card;
    return (
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(",")} - {costForTwoMessage}</p>
            <ul>
                {itemCards.map(item => <li>{item.card.info.name}</li>)}
            </ul>
        </div>
    )

}


export default RestrauantMenu;