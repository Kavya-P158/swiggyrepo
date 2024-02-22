import Restocard from './Restocard';
import React from "react";
import { useEffect, useState } from 'react';

import Shimmer from './Shimmer';

import { Link } from 'react-router-dom';

import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {

    const [listofres, setListofres] = useState([]);
    const [filteredListofres, setfilteredListofres] = useState([])

    const [searchText, setSearchText] = useState("");
    // console.log("Body rendered")
    useEffect(() => {
        fetchdata();
    }, [])

    const fetchdata = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json();

        const totalList = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(json)
        // setListofres(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // setfilteredListofres(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setListofres(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setfilteredListofres(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
    }
    const status = useOnlineStatus();
    if (status === false) {
        return (<h1>You are offline..Please try again</h1>)
    }
    if (listofres?.length == 0) {
        return <Shimmer />
    }

    return (
        <div className='body'>
            <div className='filter flex'>
                <div className='search m-4 p-4'>
                    <input className='border border-solid border-black' type='text' value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                    <button className='rounded-lg px-4 py-2 bg-green-300 m-4' onClick={() => {
                        const searchlist = listofres.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setfilteredListofres(searchlist)
                    }}>Search</button>
                </div>
                <div className='search m-4 p-4 flex items-center'>
                    <button className='rounded-lg px-4 py-2 bg-purple-400 m-4'
                        onClick={() => {
                            const filteredlist = listofres.filter((res) => res.info.avgRating > 4)
                            setListofres(filteredlist)
                            console.log(filteredListofres)
                        }}
                    >Top rated restaurant</button>
                </div>

            </div>
            <div className='flex flex-wrap'>
                {
                    filteredListofres?.map(restaurant => {

                        return <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} ><Restocard resdata={restaurant} /></Link>
                    }
                    )}
            </div>
        </div>
    );
}

export default Body;