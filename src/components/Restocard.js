import Body from "./Body";
// import { useContext } from "react";
import { CDN_URL } from "../utils/constants";

// import UserContext from "../utils/UserContext";

const Restocard = (props) => {
    const { resdata } = props;
    console.log(resdata)
    // const { loggedinuser } = useContext(UserContext);
    const {
        cloudinaryImageId, name, cuisines, locality, avgRating, costForTwo
    } = resdata?.info
    return (
        <div data-testid="resCard"
            className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className='res-image' src={CDN_URL + cloudinaryImageId}></img>
            <h3 className="py-4">{name}</h3>
            <h4 className="py-4">{cuisines.join(",")}</h4>
            <h4>{locality}</h4>
            <h4>{avgRating}</h4>
            <h4 className="py-4">{costForTwo}</h4>
            {/* <p>{loggedinuser}</p> */}

        </div >
    );
};

export default Restocard;

