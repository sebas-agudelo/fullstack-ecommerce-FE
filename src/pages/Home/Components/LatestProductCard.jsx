import { Link } from "react-router-dom";

export const LatestProductCard = ({ product }) => {
    return (
        <Link to={`/product/${product?.id}`}>
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
                <div className="absolute left-[15%] -translate-x-[15%] md:left-[5%] bottom-[5%] md:-translate-x-[5%] -translate-y-[5%]">
                    <p className="text-xs mb-1">{product.short_description}</p>
                    <p className="text-[14px] font-bold">{product.title}</p>
                </div>
            </div>
        </Link>
    )
}