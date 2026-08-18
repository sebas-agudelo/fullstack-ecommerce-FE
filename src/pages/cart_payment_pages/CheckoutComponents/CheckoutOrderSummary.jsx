import { useContext } from "react";

import { CartContext } from "../../../Context/useCartContext"

import { CartItemList } from "../CartComponents/CartItemList";
import { formatPrice } from "../../../utils/formatPrice";

import { IoIosArrowDown } from "react-icons/io";

export const CheckoutOrderSummary = ({ isOrderSummaryOpen, setIsOrderSummaryOpen }) => {
    const { total_price } = useContext(CartContext)
    return (
        <>
            <button
                className="w-full"
                onClick={() => setIsOrderSummaryOpen(!isOrderSummaryOpen)}
            >
                <p className="flex justify-between items-center px-4 py-6 border-b">
                    <span className="text-[18px] font-extrabold">{formatPrice(total_price)} kr.</span>

                    <span className="flex items-center gap-2">
                        {isOrderSummaryOpen ? "Dölj produkter" : "Visa produkter"}

                        <IoIosArrowDown
                            className={`
                    bg-purple-950 text-white h-[26px] w-[26px] rounded-full px-1
                    transition-transform duration-300 ease-in-out
                    ${isOrderSummaryOpen ? "rotate-180" : "rotate-0"}
                `}
                        />
                    </span>
                </p>
            </button>

            {isOrderSummaryOpen && <CartItemList />}
        </>
    )

}