import { Link, useParams } from "react-router-dom";
import { useGetProductById } from "../../../hooks/products/useProducts";
import { useAddCartItem } from "../../../hooks/Cart/useAddCartItem";
import { formatPrice } from "../../../utils/formatPrice";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Zoom } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';


import { useState } from "react";
import { MdClose } from "react-icons/md";

import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoCardOutline } from "react-icons/io5";

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
        <div className="max-w-[1440px] m-auto bg-white">
            <div className="max-w-[1280px] m-auto pt-4 lg:pt-8 pb-8">
                <div className="">
                    <div className="h-full flex flex-col md:flex-row justify-center mb-6 xl:mb-10 px-4 lg:px-10">
                        <div className="w-full md:w-[55%] lg:w-[61%] md:pr-6">
                            <div className="h-auto">

                                <div className="relative pb-4 rounded-md w-full h-auto lg:h-[545px] mb-8 lg:mb-12 bg-gray-50/20">
                                    <div className="hidden lg:block">                                {
                                        product?.data?.product_images?.length > 1 && (
                                            <>
                                                <button
                                                    className={`
    swiper-button-prev-custom
    hidden lg:flex
    justify-center items-center
    h-[50px] w-[50px]
    hover:shadow-lg hover:rounded-[50%]
    absolute
    top-1/2 -translate-y-1/2
    left-[2%] -translate-x-[2%]
    ${isModalOpen ? "hidden" : "z-10"}
  `}
                                                >
                                                    <IoIosArrowBack className="text-[30px] text-purple-950" />
                                                </button>


                                                <button className={`swiper-button-next-custom lg:flex justify-center items-center h-[50px] w-[50px] hover:shadow-lg hover:rounded-[50%] absolute  top-1/2 -translate-y-1/2
    right-[2%] translate-x-[2%] ${isModalOpen ? "hidden" : "z-10"}`}>
                                                    <IoIosArrowForward className="text-[30px] text-purple-950" />
                                                </button>
                                            </>
                                        )
                                    }
                                    </div>


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
                                                className={`w-full h-full ${isModalOpen ? "z-0" : ""} [&_.swiper-wrapper]:flex [&_.swiper-wrapper]:items-center [&_.swiper-pagination]:shadow-lg [&_.swiper-pagination]:bg-gray-50 [&_.swiper-pagination]:w-auto [&_.swiper-pagination]:left-1/2 [&_.swiper-pagination]:-translate-x-1/2 [&_.swiper-pagination]:rounded-xl  [&_.swiper-pagination]:p-1`}

                                            >
                                                {
                                                    product?.data.product_images?.map((image) => (
                                                        <SwiperSlide
                                                            onClick={() => {
                                                                setISModalOpen(!isModalOpen)
                                                            }}
                                                            className="h-full flex justify-center"
                                                        >
                                                            <div className="w-full lg:w-[75%] xl:w-[80%] h-full">
                                                                <img src={image.img} alt=""
                                                                    className="w-full h-full object-contain pb-14" />
                                                            </div>

                                                        </SwiperSlide>
                                                    ))
                                                }

                                            </Swiper>

                                            :
                                            <div className="w-full lg:w-[75%] xl:w-[80%] h-full flex justify-center">
                                                <img src={product?.data?.img} alt=""
                                                    className="w-full h-[90%] m-auto object-contain" />
                                            </div>
                                    }
                                </div>
                                <div className="">
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
                                            className="font-bold underline"
                                        >
                                            Visa mer
                                        </Link>
                                    </div>

                                    {/* <div className="flex-[0_0_50%]">
                                <h2 className="text-[20px] font-extrabold mb-3">Teknisk specifikation</h2>
                                <ul className="pl-5 my-2">
                                    {product?.data?.product_properties_values.slice(0, 3).map((v) => (
                                        <li className="list-disc pb-2">{v.value}</li>
                                    ))}
                                </ul>

                                <Link

                                    onClick={(e) => {
                                        e.preventDefault()
                                        setSections(prev => ({ ...prev, "specs": true }))
                                        document.getElementById("specifications").scrollIntoView({
                                            behavior: "smooth",
                                            block: "start"
                                        })

                                    }}
                                    className="font-bold text-[14px]">Visa mer</Link>
                            </div> */}
                                </div>


                                {
                                    isModalOpen && (
                                        <div className="fixed inset-0 bg-gray-900/30 w-full h-full ">
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

                                                <div className="hidden lg:block">
                                                    {
                                                        product?.data?.product_images?.length > 1 && (
                                                            <>
                                                                <button className={`swiper-button-prev-custom bg-purple-950 hidden lg:flex justify-center items-center h-[50px] w-[50px] shadow-md rounded-[50%] absolute left-[20%] -translate-x-[20%] top-1/2 -translate-y-1/2 z-10`}>
                                                                    <IoIosArrowBack className="text-[22px] text-white" />
                                                                </button>

                                                                <button className={`swiper-button-next-custom bg-purple-950 hidden lg:flex justify-center items-center h-[50px] w-[50px] shadow-md rounded-[50%] absolute left-[80%] -translate-x-[80%] !important top-1/2 -translate-y-1/2 z-10`}>
                                                                    <IoIosArrowForward className="text-[22px] text-white" />
                                                                </button>
                                                            </>
                                                        )
                                                    }
                                                </div>
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

                            </div>

                        </div>

                        <div className="w-full md:w-[45%] lg:w-[39%] mb-8 lg:mb-0 bg-gray-100/50 rounded-md shadow-md">
                            <div className="py-6 px-4 lg:px-6">
                                <p className="text-[14px] text-gray-500">Modell: {product?.data?.brand}</p>
                                <p className="text-[18px] lg:text-[27px] font-extrabold mb-4">{product?.data.title}</p>
                                <p className="text-[40px] font-extrabold mb-10">{formatPrice(product?.data.price)}:-</p>
                                <div className="mb-4 line-clamp-2 overflow-hidden text-gray-700">
                                    <p className="text-[14px] font-medium">{product?.data?.short_description}</p>
                                </div>


                                <div className="mb-8">
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault()
                                            add(1, product?.data)
                                        }}
                                        className="buttons buttons-bg mb-4"
                                    >Lägg i varukorgen</button>

                                    <div className="flex items-center gap-x-2">
                                        <AiOutlineHeart className="text-[23px]" /> <p>Spara</p>
                                    </div>
                                </div>

                                <div className="mb-6 border-b pb-6 border-purple-950">
                                    <h2 className="font-bold text-[14.5px]">Teknisk specifikation</h2>
                                    <ul className="pl-5 my-2">
                                        {product?.data?.product_properties_values.slice(0, 3).map((v) => (
                                            <li className="list-disc text-[14.5px] py-2">{v.value}</li>
                                        ))}
                                    </ul>

                                    <Link

                                        onClick={(e) => {
                                            e.preventDefault()
                                            setSections(prev => ({ ...prev, "specs": true }))
                                            document.getElementById("specifications").scrollIntoView({
                                                behavior: "smooth",
                                                block: "start"
                                            })

                                        }}
                                        className="font-bold text-[14px]">Visa mer</Link>
                                </div>

                                <div className="flex flex-col justify-center gap-4 text-[14.5px]">
                                    <p className="flex items-center gap-2 font-medium"><IoCardOutline className="text-[25px] text-purple-950" /> Säker betalning</p>
                                    <p className="flex items-center gap-2 font-medium"><BsBagCheck className="text-[25px] text-purple-950" /> 60 dagars öppet köp</p>
                                    <p className="flex items-center gap-2 font-medium"><MdOutlineSettingsBackupRestore className="text-[25px] text-purple-950" /> Gratis retur</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="w-full">
                    <div className="py-8 border-y"
                        id="description"
                    >
                        <div className="px-4 lg:px-10">
                            <h2
                                onClick={() => toggleSection("description")}
                                className="font-bold flex justify-between items-center">Produktbeskrivning
                                <IoIosArrowDown />
                            </h2>
                            {
                                sections.description && (
                                    <div className="mt-8">
                                        <h1>{product?.data?.title}</h1>
                                        <p>{product?.data?.description}</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className="py-8 border-y"
                        id="specifications"
                    >
                        <div className="px-4 lg:px-10">
                            <h2
                                className="font-bold flex justify-between items-center"
                                onClick={() => toggleSection("specs")}
                            >Teknisk specifikation
                                <IoIosArrowDown />
                            </h2>


                            {sections.specs &&


                                (

                                    <div className="mt-8">
                                        {product?.data?.product_properties_values?.map((v) => (
                                            <p className="py-2">
                                                <span className="font-extrabold">{propertyLabels[v?.products_properties?.name] || v?.products_properties?.name}</span>
                                                : {v?.value}

                                            </p>
                                        ))}
                                    </div>

                                )

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}