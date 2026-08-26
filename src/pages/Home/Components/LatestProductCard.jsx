import { Link } from "react-router-dom";

export const LatestProductCard = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`}>
            <div className="h-[300px] md:h-[400px] w-full rounded-2xl border relative">
                <p className="absolute text-[10px] font-medium top-[5%] left-[5%] -translate-x-[5%] -translate-y-[5%] text-gray-600">{product.category_name}</p>
                <div className="h-[230px] md:h-[300px] w-full overflow-hidden relative">
                    <div className="h-full w-full px-10 md:px-16">
                        <img
                            className="object-contain h-full w-full rounded-2xl"
                            src={product.img}
                            alt=""
                        />
                    </div>

                </div>
                <div className="w-full absolute px-6 bottom-[5%] -translate-y-[5%]">
                    <p className="text-xs mb-1 truncate overflow-hidden">{product.short_description}</p>
                    <p className="text-[14.5px] font-bold truncate overflow-hidden">{product.title}</p>
                </div>
            </div>
        </Link>
    )
}