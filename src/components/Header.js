import { LOGO_URL } from "../utils/constants";
// import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";



export const Header = () => {

    var [btnName, setbtnName] = useState("Login");
    const onlinestatus = useOnlineStatus();

    // const { loggedinuser } = useContext(UserContext);

    //Subscribing to the store using useSelector()
    const cartitems = useSelector((store) => store.cart.items)

    return (
        <div className='flex justify-between bg-pink-100 shadow-md m-2'>
            <div className='logo'>
                <img
                    className='w-20' src={LOGO_URL}></img>
            </div>
            <div className='navbar'>
                <ul className="flex  p-4 m-4">
                    <li className="px-4">
                        <Link to="/"> Home</Link>

                    </li>
                    <li className="px-4">
                        Online status:
                        {onlinestatus ? "🟢" : "🔴"}

                    </li>
                    <li className="px-4">
                        <Link to="/about"> About</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact"> Contact</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/cart">Cart-{cartitems.length}</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    {/* <p>{loggedinuser}</p> */}
                    <button className="btn btn-primary px-4" onClick={() => {
                        btnName === "Login" ?
                            setbtnName("Logout") : setbtnName("Login");
                    }}>{btnName}</button>
                </ul>

            </div>

        </div>

    );
}
export default Header;