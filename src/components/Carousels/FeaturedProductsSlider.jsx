import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode, Mousewheel } from "swiper/modules";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "swiper/css/free-mode";


export const FeaturedProductsSlider = ({ children }) => {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [isSwipeStart, setIsSwipeStart] = useState(true);
    const [isSwipeEnd, setIsSwipeEnd] = useState(false);

    return (
        <div className="relative">
            <button className={`swiper-button-prev-custom bg-purple-950 hidden lg:flex justify-center items-center h-[50px] w-[50px] shadow-md rounded-[50%] absolute left-[-1%] translate-x-[1%] top-1/2 -translate-y-1/2 z-10 ${isSwipeStart ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                <GoArrowLeft className="text-[22px] text-white" />
            </button>

            <button className={`swiper-button-next-custom bg-purple-950 hidden lg:flex justify-center items-center h-[50px] w-[50px] shadow-md rounded-[50%] absolute right-[-1%] translate-x-[1%] top-1/2 -translate-y-1/2 z-10 ${isSwipeEnd ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                <GoArrowRight className="text-[22px] text-white" />
            </button>

            <Swiper
                modules={[Navigation, Pagination, FreeMode, Mousewheel]}
                navigation={{
                    prevEl: ".swiper-button-prev-custom",
                    nextEl: ".swiper-button-next-custom"
                }}
                freeMode={true}
                mousewheel={{
                    forceToAxis: true,
                    releaseOnEdges: true
                }}
                loop={false}
                breakpoints={{
                    0: {
                        spaceBetween: 10,
                        slidesPerView: 1.4,
                        slidesPerGroup: 1
                    },
                    576: {
                        spaceBetween: 10,
                        slidesPerView: 2.4,
                        slidesPerGroup: 2
                    },
                    768: {
                        spaceBetween: 0,
                        slidesPerView: 3.2,
                        slidesPerGroup: 2
                    },
                    1024: {
                        spaceBetween: 0,
                        slidesPerView: 4.2,
                        slidesPerGroup: 2
                    }
                }}

                onSwiper={(swiper) => setSwiperInstance(swiper)}
                onProgress={(swiper) => {
                    if (!swiperInstance) return;
                    setIsSwipeStart(swiper.isBeginning);
                    setIsSwipeEnd(swiper.isEnd)
                }}
            >
                {children?.map((child, i) => (
                    <SwiperSlide key={i}>{child}</SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}