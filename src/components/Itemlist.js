import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { additem } from "../utils/cartSlice";
const Itemlist = ({ items }) => {

    const dispatch = useDispatch();
    const handleClick = ((item) => {
        dispatch(additem(item));
        console.log(item)


    })
    return (
        <div>

            {items.map((item) => (<div className="border-gray-200 border-b-2 p-2 m-2 text-left flex justify-between" key={item.card.info.id}>
                <div className="w-9/12">
                    <div className="py-2"> <span className="font-bold"> {item?.card?.info?.name} </span>

                        <span>{item.card?.info?.price / 100}</span>
                    </div>
                    <p>{item?.card?.info?.description}</p></div>
                <div className="w-3/12" >
                    <div className="absolute">
                        <button className="bg-black text-white p-2 mx-16 rounded-lg" onClick={() => handleClick(item)}>Add +</button>
                    </div>
                    <img
                        src={CDN_URL + item.card?.info?.imageId} className="w-full" /></div>

            </div>))}

        </div>
    )
}

export default Itemlist;