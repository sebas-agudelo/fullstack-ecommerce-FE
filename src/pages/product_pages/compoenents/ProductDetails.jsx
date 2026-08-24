import { useParams } from "react-router-dom";
import { useGetProductById } from "../../../hooks/products/useProducts";
import { useAddCartItem } from "../../../hooks/Cart/useAddCartItem";
import { formatPrice } from "../../../utils/formatPrice";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, FreeMode, Zoom } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { useState } from "react";
import { MdClose } from "react-icons/md";

import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";





export const ProductDetails = () => {
    const { id } = useParams();

    const { data: product } = useGetProductById(id);
    const { add } = useAddCartItem();

    const [isModalOpen, setISModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(1)

    const [sections, setSections] = useState({
        description: false,
        specs: false
    })

    const toggleSection = (section) => {
        setSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }))
    }


    const propertyLabels = {
        Battery_Time: "Batteri tid",
        Hard_Disk: "Hårddisk",
        Sound: "Ljud",
        Frequency_Response: "Frekvensgång",
        Type: "Typ",
        Connection_Type: "Anslutningstyp",
        Screen_Size: "Skärmstorlek",
        Resolution: "Upplösning",
        Power_Output: "Effektuttag",
        Function: "Funktion",
        weight: "Vikt",
        EAN_code: "EAN-kod"
    };

    return (
        <div className="max-w-[1440px] m-auto pt-8">
            <div className="px-12">
                <div className="flex">
                    <div className="lg:w-[68%] pr-16">
                        <div className="h-auto">
                            <div className="h-[560px] relative">
                                <p className="text-[14px] font-medium absolute right-[0%] -translate-x-[0%] h-[22px] w-[55px] bg-gray-100 flex justify-center items-center rounded-lg">{currentImage} / {product?.data.product_images.length > 0 && (product?.data.product_images.length)}</p>
                                {
                                    product?.data?.product_images?.length > 1 && (
                                        <>
                                            <button className={`swiper-button-prev-custom lg:flex justify-center items-center h-[50px] w-[50px] hover:shadow-lg hover:rounded-[50%] absolute left-[8%] -translate-x-[8%] top-1/2 -translate-y-1/2 ${isModalOpen ? "hidden" : "z-10"}`}>
                                                <IoIosArrowBack className="text-[30px] text-purple-950" />
                                            </button>

                                            <button className={`swiper-button-next-custom lg:flex justify-center items-center h-[50px] w-[50px] hover:shadow-lg hover:rounded-[50%] absolute left-[92%] -translate-x-[92%] !important top-1/2 -translate-y-1/2 ${isModalOpen ? "hidden" : "z-10"}`}>
                                                <IoIosArrowForward className="text-[30px] text-purple-950" />
                                            </button>
                                        </>
                                    )
                                }
                                {
                                    product?.data.product_images?.length > 1 ?
                                        <Swiper
                                            modules={[Pagination, FreeMode, Navigation]}
                                            spaceBetween={50}
                                            slidesPerView={1}
                                            pagination={{ clickable: true }}
                                            loop={true}
                                            freeMode={true}
                                            navigation={{
                                                prevEl: ".swiper-button-prev-custom",
                                                nextEl: ".swiper-button-next-custom"
                                            }}
                                            onSlideChange={(swiper) => {
                                                setCurrentImage(swiper.realIndex + 1)
                                            }}
                                            className={`w-full h-full ${isModalOpen ? "z-0" : ""}`}

                                        >
                                            {
                                                product?.data.product_images?.map((image) => (
                                                    <SwiperSlide
                                                        onClick={() => {
                                                            setISModalOpen(!isModalOpen)
                                                        }}
                                                        className="flex justify-center"

                                                    >
                                                        <img src={image.img} alt=""
                                                            className="w-[70%] h-[90%] object-contain" />
                                                    </SwiperSlide>
                                                ))
                                            }

                                        </Swiper>
                                        :

                                        <img src={product?.data?.img} alt=""
                                            className="w-[70%] h-[90%] m-auto object-contain" />
                                }
                            </div>

                            <div className="flex gap-12">
                                <div>
                                    <h2 className="font-bold">Kort om produkten</h2>
                                    <p>{product?.data?.short_description ? product?.data?.short_description : "-"}</p>
                                </div>

                                {/* <div>
                                    <h2 className="font-bold">Teknisk specifikation</h2>
                                    {product?.data?.product_properties_values.slice(0, 3).map((v) => (
                                        <p>{v.value}</p>
                                    ))}

                                    <button className="font-bold">Se alla specifikationer</button>
                                </div> */}
                            </div>


                            {
                                isModalOpen && (
                                    <div className="fixed inset-0 bg-gray-900/20 w-full h-full">
                                        <div className="w-[85%] h-[90%] rounded-md shadow-xl fixed top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] bg-white">
                                            <div className="w-full z-50 flex justify-between item-center py-4 px-8 absolute ">
                                                <div>
                                                    <p className="font-extrabold">{product?.data.title}</p>
                                                    <p className="text-[14px] font-medium">{currentImage} / {product?.data.product_images.length > 0 && (product?.data.product_images.length)}</p>

                                                </div>
                                                <div className="h-[35px] w-[35px] hover:bg-gray-100 flex justify-center items-center rounded-[50%] hover:shadow-xl cursor-pointer">
                                                    <MdClose
                                                        className="text-[22px]"
                                                        onClick={() => { setISModalOpen(false) }} />
                                                </div>
                                            </div>

                                            {
                                                product?.data?.product_images?.length > 1 && (
                                                    <>
                                                        <button className={`swiper-button-prev-custom bg-purple-950 hidden lg:flex justify-center items-center h-[50px] w-[50px] shadow-md rounded-[50%] absolute left-[20%] -translate-x-[20%] top-1/2 -translate-y-1/2 z-10`}>
                                                            <GoArrowLeft className="text-[22px] text-white" />
                                                        </button>

                                                        <button className={`swiper-button-next-custom bg-purple-950 hidden lg:flex justify-center items-center h-[50px] w-[50px] shadow-md rounded-[50%] absolute left-[80%] -translate-x-[80%] !important top-1/2 -translate-y-1/2 z-10`}>
                                                            <GoArrowRight className="text-[22px] text-white" />
                                                        </button>
                                                    </>
                                                )
                                            }
                                            <Swiper
                                                className="w-full h-full"
                                                modules={[Pagination, Navigation, FreeMode, Zoom]}
                                                spaceBetween={50}
                                                slidesPerView={1}
                                                freeMode={true}
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
                                            >
                                                {product?.data?.product_images?.map((image) => (
                                                    <SwiperSlide
                                                        className="flex justify-center items-center"
                                                    >
                                                        <img
                                                            className="w-[50%] h-[80%] object-contain"
                                                            src={image.img} alt="" />
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                        </div>
                                    </div>
                                )
                            }

                        </div>

                    </div>

                    <div className="lg:w-[32%]">
                        <div className="bg-gray-50 rounded-lg shadow-sm border-[0.5px] py-4 px-6">
                            <div className="mb-8">
                                <p className="text-[20px] font-bold">{product?.data.title}</p>
                                {/* <p className="text-[14px]">{product?.data.brand}</p> */}
                                <p className="text-[14px]">{product?.data?.short_description}</p>
                            </div>

                            <p className="text-[34px] font-extrabold mb-6">{formatPrice(product?.data.price)}:-</p>

                            <div>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault()
                                        add(1, product?.data)
                                    }}
                                    className="buttons buttons-bg"
                                >Lägg i varukorgen</button>

                                <div className="flex justify-end items-center gap-x-2">
                                    <AiOutlineHeart /> <p>Spara</p>
                                </div>
                            </div>

                            <div>
                                <h2 className="font-bold">Teknisk specifikation</h2>
                                <ul>
                                    {product?.data?.product_properties_values.slice(0, 3).map((v) => (
                                        <li className="list-disc">{v.value}</li>
                                    ))}
                                </ul>

                                <button className="font-bold">Visa mer</button>
                            </div>
                        </div>

                        <div className="hidden lg:flex flex-col justify-center gap-4 text-sm mt-6 border-[0.5px] bg-gray-50 rounded-lg shadow-sm p-6">
                            <p className="flex items-center gap-2 font-medium"><BsBagCheck className="text-[25px] text-purple-950" /> 60 dagars öppet köp</p>
                            <p className="flex items-center gap-2 font-medium"><MdOutlineSettingsBackupRestore className="text-[27px] text-purple-950" /> Gratis retur</p>
                        </div>
                    </div>
                </div>

            </div>

            <div>
                <div className="py-8 border-y">
                    <div className="px-12">
                        <h2
                            onClick={() => toggleSection("description")}
                            className="font-bold flex justify-between items-center">Produktbeskrivning
                            <IoIosArrowDown />
                        </h2>
                        {
                            sections.description && (
                                <>
                                    <h1>{product?.data?.title}</h1>
                                    <p>{product?.data?.description}</p>
                                </>
                            )
                        }
                    </div>
                </div>

                <div className="py-8 border-y">
                    <div className="px-12">
                        <h2
                            className="font-bold flex justify-between items-center"
                            onClick={() => toggleSection("specs")}
                        >Teknisk specifikation
                            <IoIosArrowDown />
                        </h2>


                        {sections.specs &&


                            (product?.data?.product_properties_values?.map((v) => (
                                <p>
                                    {propertyLabels[v?.products_properties?.name] || v?.products_properties?.name}
                                    : {v?.value}

                                </p>
                            )))

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}