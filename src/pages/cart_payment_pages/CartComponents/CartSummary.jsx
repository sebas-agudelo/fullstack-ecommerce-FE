import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import { CartContext } from "../../../Context/useCartContext";
import { CartCosts } from "./CartCosts";

import { formatPrice } from "../../../utils/formatPrice";

import { IoMdCheckmark } from "react-icons/io";

export const CartSummary = () => {
    const { total_price, items } = useContext(CartContext);

    const location = useLocation();

    const isCheckout = location.pathname === '/checkout';

    return (
        <div className={`w-full h-auto ${isCheckout ? "h-auto flex flex-col lg-w-full justify-between mb-10 lg:mb-0" : "rounded-2xl top-[0%] -translate-y-[0%] lg:py-0 lg:sticky lg:h-[368px] flex flex-col lg:w-[35%] justify-center pb-4 px-4"}`}>
            <div className={`flex flex-col mb-6 ${!isCheckout && "hidden"} lg:block`}>
                <p className="text-[18px] font-bold mb-6">{isCheckout ? "Orderöversikt" : "Din varukorg"} ({items}x)</p>
                <CartCosts />
            </div>

            <div className={`flex justify-between items-center font-medium pt-6 pb-4 ${isCheckout && "border-b-[0.5px]"} border-t border-purple-950`}>
                <p className="font-bold">Totalbelopp:</p>
                <p className="text-[27px] font-extrabold">{total_price ? formatPrice(total_price) : 0} kr</p>
            </div>

            {!isCheckout && <Link className="buttons buttons-bg" to={'/checkout'}>Fortsätt till kassan</Link>}
            {!isCheckout && <p className="text-[12px] text-center mt-2"><Link to={'/'} className="font-bold">Läs mer</Link> om våra köpvillkor och vår integritetspolicy.</p>}

            {isCheckout && (
                <div className="hidden lg:flex flex-col justify-center gap-4 text-sm mt-8">
                    <p className="flex items-center gap-2"><IoMdCheckmark className="text-xl text-green-600" /> 60 dagars returrätt</p>
                    <p className="flex items-center gap-2"><IoMdCheckmark className="text-xl text-green-600" /> Snabb leverans</p>
                    <p className="flex items-center gap-2"><IoMdCheckmark className="text-xl text-green-600" /> Fri frakt</p>
                </div>
            )}
        </div>
    )
}