import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';

import { SliderButtons } from './SliderButtons';

export const ProductDetailsSlider = ({ product, isModalOpen, setISModalOpen, setCurrentImage }) => {
    return (
        <div className="relative pb-4 rounded-md w-full h-auto lg:h-[545px] mb-8 lg:mb-12 bg-gray-50/20">
            
            <div className='relative overflow-hidden w-full h-full'>
                {
                    product?.data.product_images?.length > 1 ?

                        <Swiper
                            modules={[Pagination, Navigation]}
                            spaceBetween={50}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            loop={true}
                            navigation={{
                                prevEl: ".swiper-button-prev-custom",
                                nextEl: ".swiper-button-next-custom"
                            }}
                            onSlideChange={(swiper) => {
                                setCurrentImage(swiper.realIndex + 1)
                            }}
                            className={`
                            w-full h-full ${isModalOpen ? "z-0" : ""} [&_.swiper-wrapper]:flex [&_.swiper-wrapper]:items-center [&_.swiper-pagination]:shadow-lg [&_.swiper-pagination]:bg-gray-50 [&_.swiper-pagination]:w-auto [&_.swiper-pagination]:left-1/2 [&_.swiper-pagination]:-translate-x-1/2 [&_.swiper-pagination]:rounded-xl  [&_.swiper-pagination]:p-1
                            `}

                        >
                            {
                                product?.data.product_images?.map((image) => (
                                    <SwiperSlide
                                        onClick={() => {
                                            setISModalOpen(!isModalOpen)
                                        }}
                                        className="h-full flex justify-center"
                                    >
                                        <div className="w-full lg:w-[70%] xl:w-[75%] h-full">
                                            <img src={image.img} alt=""
                                                className="w-full h-full object-contain pb-14" />
                                        </div>

                                    </SwiperSlide>
                                ))
                            }

                        </Swiper>

                        :

                        <div
                            className="w-full lg:w-[75%] xl:w-[80%] h-full flex justify-center">
                            <img src={product?.data?.img} alt=""
                                className="w-full h-[90%] m-auto object-contain" />
                        </div>
                }
                <div className={`${isModalOpen && "hidden"}`}>
                <SliderButtons product={product} L={"5%"} R={"5%"} isModalOpen={isModalOpen} />
            </div>
            </div>
        </div>
    )
}