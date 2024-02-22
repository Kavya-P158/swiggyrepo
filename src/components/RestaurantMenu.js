import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants"
import useRestaurantMenu from "./useRestaurantMenu";
import { Rescategories } from "./Rescategories";

const RestaurantMenu = () => {
    const { resId } = useParams();
    // const [resinfo, setResinfo] = useState(null)

    const resinfo = useRestaurantMenu(resId);


    const [showindex, setshowindex] = useState(null);
    if (resinfo === null) {

        return <Shimmer />;
    }

    const { name, costForTwoMessage, avgRatingString, cuisines
    } = resinfo?.data?.cards[0]?.card?.card?.info

    // console.log("Name is" + name)

    const { itemCards } = resinfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

    console.log(resinfo?.data?.cards[2]?.groupedCard?.cardGroupMap)
    const categories = resinfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")





    return (
        <div className="text-center">
            <h2 className="font-bold my-6 text-2xl">{name}</h2>
            <p className="font-bold text-lg">{cuisines.join(",")}</p>
            <h3>Cost for 2 is {costForTwoMessage}</h3>
            <h4>Rating {avgRatingString} </h4>

            <ul>

                {
                    itemCards.map((item) => (

                        <li key={item.card?.info?.id}>{item.card?.info?.name} - Rs.{item.card?.info?.price / 100}</li>

                    ))
                }
            </ul>
            {categories.map((c, index) => (<Rescategories data={c}
                showitems={index === showindex ? true : false}
                setshowindex={() => setshowindex(index === showindex ? null : index)}

            />))}
        </div>
    )

}

export default RestaurantMenu;