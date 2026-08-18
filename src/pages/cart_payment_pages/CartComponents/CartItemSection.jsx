import {useContext} from "react";
import { CartItemList } from "./CartItemList";
import { CartCosts } from "./CartCosts";
import { CartContext } from "../../../Context/useCartContext";

export const CartItemSection = () => {
    const {items} = useContext(CartContext);

    return (
        <div className="h-[100%] overflow-y-auto no-scrollbar px-4 lg:w-[65%] lg:h-full lg:mr-6 lg:shadow-md lg:shadow-md bg-gray-50 lg:px-0">
            <p className="text-xl font-medium mt-6 mb-4 lg:hidden">Din varukorg ({items}x)</p>
        
            <CartItemList />

            <div className="mt-8 lg:hidden">
                <CartCosts />
            </div>
        </div>
    )
} 