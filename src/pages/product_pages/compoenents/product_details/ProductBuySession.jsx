import { Link, useParams } from "react-router-dom";

import { formatPrice } from "../../../../utils/formatPrice";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { IoCardOutline } from "react-icons/io5";
import { BsBagCheck } from "react-icons/bs";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import { useAddCartItem } from "../../../../hooks/Cart/useAddCartItem";

export const ProductBuySession = ({ product, setSections }) => {

    const { add } = useAddCartItem();

    return (
        <div className="w-full md:w-[45%] lg:w-[39%] lg:mb-0 bg-gray-100/50 rounded-md shadow-md">
            <div className="py-6 px-4 lg:px-6">
                <p className="text-[14px] text-gray-500">Modell: {product?.data?.brand}</p>
                <p className="text-[18px] lg:text-[27px] font-extrabold mb-4">{product?.data.title}</p>
                <p className="text-[40px] font-extrabold mb-10">{formatPrice(product?.data.price)}:-</p>
                <div className="mb-4 line-clamp-2 overflow-hidden text-gray-700">
                    <p className="text-[14px] font-medium">{product?.data?.short_description}</p>
                </div>


                <div className="mb-8">
                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            add(1, product?.data)
                        }}
                        className="buttons buttons-bg mb-4"
                    >Lägg i varukorgen</button>

                    <div className="flex items-center gap-x-2">
                        <AiOutlineHeart className="text-[23px]" /> <p>Spara</p>
                    </div>
                </div>

                <div className="mb-6 border-b pb-6 border-purple-950">
                    <h2 className="font-bold text-[14.5px]">Teknisk specifikation</h2>
                    <ul className="pl-5 my-2">
                        {product?.data?.product_properties_values.slice(0, 3).map((v) => (
                            <li className="list-disc text-[14.5px] py-2">{v.value}</li>
                        ))}
                    </ul>

                    <Link

                        onClick={(e) => {
                            e.preventDefault()
                            setSections(prev => ({ ...prev, "specs": true }))
                            document.getElementById("specifications").scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            })

                        }}
                        className="font-bold text-[14px]">Visa mer</Link>
                </div>

                <div className="flex flex-col justify-center gap-4 text-[14.5px]">
                    <p className="flex items-center gap-2 font-medium"><IoCardOutline className="text-[25px] text-purple-950" /> Säker betalning</p>
                    <p className="flex items-center gap-2 font-medium"><BsBagCheck className="text-[25px] text-purple-950" /> 60 dagars öppet köp</p>
                    <p className="flex items-center gap-2 font-medium"><MdOutlineSettingsBackupRestore className="text-[25px] text-purple-950" /> Gratis retur</p>
                </div>
            </div>

        </div>
    )
}