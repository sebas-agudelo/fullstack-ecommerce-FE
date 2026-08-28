import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Zoom } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';

import { ProductDetailsSlider } from "./ProductDetailsSlider";

export const ProductViewSection = ({
    product,
    isModalOpen,
    setISModalOpen,
    currentImage,
    setCurrentImage,
    setSections }) => {
    return (
        <div className="w-full md:w-[55%] lg:w-[61%] md:pr-6 lg:pr-8">
            <div className="h-auto">
                <ProductDetailsSlider
                    product={product}
                    isModalOpen={isModalOpen}
                    setISModalOpen={setISModalOpen}
                    setCurrentImage={setCurrentImage}
                />

                <div className=" mb-8">
                    <h2 className="text-[18px] font-extrabold mb-3">Kort om produkten</h2>
                    <p className="mb-3 line-clamp-3">{product?.data?.short_description ? product?.data?.short_description : "-"}</p>
                    <Link
                        to="#description"
                        onClick={(e) => {
                            e.preventDefault();
                            setSections(prev => ({ ...prev, description: true }))
                            document.getElementById("description")?.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });
                        }}
                        className="font-bold underline xl:hover:text-purple-950"
                    >
                        Visa mer
                    </Link>
                </div>
            </div>
        </div>
    )
}