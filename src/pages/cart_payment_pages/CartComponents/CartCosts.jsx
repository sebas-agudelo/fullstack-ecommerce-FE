import { useContext } from "react";
import { CartContext } from "../../../Context/useCartContext";

import { formatPrice } from "../../../utils/formatPrice";

export const CartCosts = () => {
    const { tax } = useContext(CartContext);
    
    return (
             <div className="w-full flex flex-col">
                <div className="flex justify-between mb-3 text-[14px]">
                    <p className="font-bold text-gray-700">Frakt:</p>
                    <p className="font-extrabold ">0 kr</p>
                </div>
                <div className="flex justify-between mb-3 text-[14px]">
                    <p className="font-bold text-gray-700">Moms:</p>
                    <p className="font-extrabold">{formatPrice(tax)} kr</p>
                </div>
            </div>
    )
}