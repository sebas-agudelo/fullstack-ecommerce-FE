import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Zoom } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';

import { MdClose } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { SliderButtons } from './SliderButtons';

export const ProductGalleryModal = ({ product, isModalOpen, setISModalOpen, currentImage, setCurrentImage }) => {
    return (
        <>
            {
                isModalOpen && (
                    <div className="fixed inset-0 bg-gray-900/30 w-full h-full">
                        <div className="w-full lg:w-[85%] h-full lg:h-[90%] lg:rounded-md lg:shadow-2xl lg:fixed lg:top-[50%] lg:-translate-y-[50%] lg:left-[50%] lg:-translate-x-[50%] bg-white">
                            <div className="w-full z-50 flex justify-between item-center py-4 px-4 lg:px-8 absolute ">
                                <div className="w-1/2">
                                    <p className="font-extrabold truncate">{product?.data.title}</p>
                                    <p className="text-[14px] text-gray-500">Bilder: {currentImage} / {product?.data.product_images.length > 0 && (product?.data.product_images.length)}</p>

                                </div>
                                <div className="w-[45px] h-[45px] border border-purple-950 hover:bg-gray-100 flex justify-center items-center rounded-[50%] hover:shadow-xl cursor-pointer">
                                    <MdClose
                                        className="text-[27px] text-gray-500"
                                        onClick={() => { setISModalOpen(false) }} />
                                </div>
                            </div>


                             <SliderButtons product={product} L={"18%"} R={"18%"} isModalOpen={isModalOpen}/>



                            <Swiper

                                modules={[Pagination, Navigation, Zoom]}
                                spaceBetween={50}
                                slidesPerView={1}
                                Zoom={true}
                                loop={true}
                                pagination={{ clickable: true }}
                                navigation={{
                                    prevEl: ".swiper-button-prev-custom",
                                    nextEl: ".swiper-button-next-custom"
                                }}
                                onSlideChange={(swiper) => {
                                    setCurrentImage(swiper.realIndex + 1)
                                }}
                                className="[&_.swiper-pagination]:hidden w-full h-full py-6 bg-gray-100"
                            >
                                {product?.data?.product_images?.map((image) => (
                                    <SwiperSlide
                                        className="flex justify-center items-center px-4 lg:px-0"
                                    >
                                        <div className="w-full lg:w-[50%] h-full flex justify-center">
                                            <img
                                                className="w-full h-full object-contain lg:py-16"
                                                src={image.img} alt="" />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                )
            }
        </>
    )

}