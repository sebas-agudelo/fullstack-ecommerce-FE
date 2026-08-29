import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Zoom } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';

import { MdClose } from "react-icons/md";
import { SliderButtons } from './SliderButtons';

export const ProductGalleryModal = ({ product, isModalOpen, setISModalOpen, currentImage, setCurrentImage }) => {
    return (
        <>
            {
                isModalOpen && (
                    <div className="fixed inset-0 bg-gray-900/30 w-full h-full flex justify-center items-center">
                        <div className="flex flex-col w-full lg:w-full h-full lg:h-full lg:rounded-md lg:shadow-2xl bg-white">
                            <div className="w-full z-50 flex justify-between item-center pt-2 px-4 lg:px-8  ">
                                <div className="w-1/2">
                                    <p className="text-[14.5px] text-gray-500">Bilder: {currentImage} / {product?.data.product_images.length > 0 && (product?.data.product_images.length)}</p>

                                </div>
                                <div className="w-[45px] h-[45px] border border-purple-950 hover:bg-gray-100 flex justify-center items-center rounded-[50%] hover:shadow-xl cursor-pointer">
                                    <MdClose
                                        className="text-[27px] text-gray-500"
                                        onClick={() => { setISModalOpen(false) }} />
                                </div>
                            </div>




                            <div className='relative overflow-hidden w-full h-full'>

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
                                    className="[&_.swiper-pagination]:hidden w-full h-full"
                                >
                                    {product?.data?.product_images?.map((image) => (
                                        <SwiperSlide
                                            className="flex justify-center items-center h-full w-full"
                                        >
                                            <div className="w-full lg:w-[46%] h-full flex justify-center pb-8">
                                                <img
                                                    className="w-full h-auto object-contain"
                                                    src={image.img} alt="" />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <SliderButtons product={product} L={"20%"} R={"20%"} isModalOpen={isModalOpen} />
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )

}