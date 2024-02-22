import { useEffect, useState } from "react"
import { MENU_API } from "../utils/constants"
const useRestaurantMenu = (resId) => {

    const [resinfo, setResinfo] = useState(null);
    useEffect(() => {
        fetchdata();
    }, [])


    // console.log(params);
    const fetchdata = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.382488008500728&lng=77.89823569357395&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER");

        const json = await data.json();

        // console.log(json);

        setResinfo(json);
        //console.log(resinfo)


    }
    return resinfo;
}
export default useRestaurantMenu;