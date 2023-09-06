import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestrauantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

    useEffect(
        () => {
            fetchMenu();
        }, []
    )


    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data);
    }

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
                {itemCards.map(item => <li>{item.card.info.name} -{"RS "}
                {item.card.info.price / 100 || item.card.info.dreafultPrice / 100 }
                </li>)}
            </ul>
        </div>
    )

}


export default RestrauantMenu;