import Itemlist from "./Itemlist";
import { useState } from "react";
export const Rescategories = ({ data, showitems, setshowindex, index }) => {

    const handleClick = () => {


        setshowindex()

    }
    return (
        <div>
            <div className="bg-gray-50 w-6/12 p-4 mx-auto my-4 shadow-lg flex justify-between">
                <div className="cursor-pointer flex justify-between" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.card?.card?.title} ({data.card?.card?.itemCards.length})</span>
                    <span>🔽</span>


                    {showitems && <Itemlist items={data.card?.card?.itemCards} />}
                </div>
            </div>

        </div>
    )
}

