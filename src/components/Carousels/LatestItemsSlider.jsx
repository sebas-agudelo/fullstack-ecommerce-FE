import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "swiper/css/free-mode";


export const LatestItemsSlider = ({ children }) => {
    return (
        <Swiper
        className="h-[350px] md:h-[450px]"
            modules={[Pagination, FreeMode, Mousewheel]}
            pagination={{ clickable: true }}
            // freeMode={true}
            mousewheel={{
                forceToAxis: true,
                releaseOnEdges: true
            }}

            breakpoints={{
                0: {
                    spaceBetween: 12,
                    slidesPerView: 1.4,
                    slidesPerGroup: 1
                },
                768: {
                    spaceBetween: 12,
                    slidesPerView: 2,
                    slidesPerGroup: 1
                },
                1024: {
                    spaceBetween: 12,
                    slidesPerView: 3,
                    slidesPerGroup: 1
                }
            }}
        >
            {
                children?.map((child, i) => (
                    <SwiperSlide className="h-[450px]" key={i}>{child}</SwiperSlide>
                ))
            }

        </Swiper>
    )
}