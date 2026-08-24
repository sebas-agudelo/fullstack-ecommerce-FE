import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";

import { formatPrice } from "../../utils/formatPrice";
import { useAddCartItem } from '../../hooks/Cart/useAddCartItem';

export const ProductCard = ({ product }) => {
    const { add } = useAddCartItem();
    return (
        <div className="group relative h-[480px] overflow-hidden rounded-lg border mb-4 md:m-1 transition-all duration-150 xl:hover:shadow-md ease-in">
            <Link to={``}>
                <div className="relative w-full h-[225px] bg-gray-50 group">
                    <div className="h-full w-full overflow-hidden px-10 m-auto">
                        <img
                            className="h-full w-full object-contain transition-transform duration-150 group-hover:scale-90 ease-in"
                            src={product.img}
                            alt={product.title}
                        />
                    </div>

                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            add(1, product)
                        }}
                        className='absolute left-[89%] -translate-x-[89%] botton-[50%] -translate-y-[50%] flex justify-center items-center h-[32px] border rounded-2xl px-4 z-20 border-purple-950 border-[0.5px] bg-white md:hover:bg-purple-950 md:hover:text-white transition-colors duration-300 ease-in-out md:hover:shadow-xl'>
                        <FaPlus className="text-md mr-2 text-[15px]" />
                        Köp
                    </button>

                </div>

                <div className="px-4">
                    <p className="absolute top-[3%] left-[5%] translate-x-[3%] translate-y-[5%] text-[10px] font-medium text-gray-500">{product.category_name}</p>
                    <p className="text-[12px] mt-6 text-gray-600">{product.short_description}</p>
                    <p className="text-[14.5px] font-bold mb-4">{product.title}</p>
                    <ul className="pl-4">
                        {
                            product?.product_properties_values?.map((pro) => (
                                <li className="text-xs list-disc py-1 text-gray-600">{pro.value}</li>
                            ))
                        }
                    </ul>
                    <p className="text-[28px] font-extrabold mt-10">{formatPrice(product.price)}:-</p>

                </div>
            </Link>
        </div>
    )
}