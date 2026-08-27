import { useContext } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { useUpdateCartItem } from "../../../hooks/Cart/useUpdateCartItem"
import { CartContext } from "../../../Context/useCartContext";
import { formatPrice } from "../../../utils/formatPrice";

export const CartItemList = () => {
    const { update } = useUpdateCartItem();
    const { cart } = useContext(CartContext);

    return (
        <div>
            {cart?.map((item) => (
                <div key={item.product_id} className="py-6 px-4 lg:px-6 border-b ">
                    <div className="flex mb-4">
                        <div className="w-[80px] mr-6 lg:w-[100px]">
                            <img className="w-full" src={item.product_img} alt={item.product_title} />
                        </div>

                        <div className="flex flex-col justify-center w-[calc(100%_-_80px)] lg:w-[calc(100%_-_100px)]">
                            <div className="">
                                <p className="text-[14px] font-extrabold mb-1">{item.product_title}</p>
                                <p className="text-xs text-gray-700 truncate md:w-[45%]">{item.short_description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex">
                            <div className="w-[110px] lg:w-[113px] flex justify-between items-center bg-gray-100 rounded-full p-[2px] mr-3 ">
                                <button
                                    className="flex justify-center items-center bg-white rounded-full h-[30px] w-[30px]"
                                    onClick={() => update(-1, item)}> {item.quantity === 1 ? <IoTrashOutline className="text-md" /> : '-'}</button>

                                <p className="">{item?.quantity}</p>

                                <button
                                    className="flex justify-center items-center bg-white rounded-full h-[30px] w-[30px]"
                                    onClick={() => update(1, item)}>+</button>
                            </div>
                            <p className="flex items-center text-xl text-gray-600">{item.quantity > 1 && <IoTrashOutline />}</p>
                        </div>


                        <div className="text-right">
                            <p className="font-extrabold text-[20px]">{formatPrice(item?.unit_price)} kr</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}