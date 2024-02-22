import { useDispatch, useSelector } from "react-redux"
import Itemlist from "./Itemlist"
import { Button } from "bootstrap"
import { clearcart } from "../utils/cartSlice"


const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(clearcart());
    }
    return (
        <div className="text-center">
            <h2 className="font-bold p-3" >Cart</h2>
            <div className="w-6/12 m-auto p-3">
                <button onClick={() => handleClick()} className="p-2 m-2 bg-black text-white rounded-md">Clear cart</button>
                <Itemlist items={cartItems} />
            </div>

        </div>
    )
}

export default Cart;