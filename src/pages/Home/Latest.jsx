import { LatestProductCard } from "./Components/LatestProductCard"
import { LatestItemsSlider } from "../../components/Carousels/LatestItemsSlider";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "swiper/css/free-mode";
import { useNews } from "../../hooks/home/useHome";
import { MainErrors } from "../../components/MainErrors";
import ContentSpinner from "../../components/spinners/ContentSpinner"

export const Latest = () => {
    const { data: products, isLoading, error } = useNews();

    return (
        <div className="relative bg-white px-4 md:px-4 h-auto mb-8 bg-red-500">
            <h2 className="text-[22px] text-gray-800 pt-6 pb-3 lg:pt-10 lg:pb-3 lg:pl-2 font-extrabold">NYHETER</h2>

            {!isLoading && error && (<MainErrors errors={error?.message} />)}

            {isLoading && <ContentSpinner />}

            <LatestItemsSlider>
                {products?.map((product) => (
                    <LatestProductCard product={product} />
                ))}
            </LatestItemsSlider>
        </div>
    )
}