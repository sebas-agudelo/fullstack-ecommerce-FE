import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export const SliderButtons = ({ product, L, R, isModalOpen }) => {
    return <div className="hidden lg:block">
        {
            product?.data?.product_images?.length > 1 && (
                <>
                    <button
                        style={{ left: L, transformX: `translateX(-${L})` }}
                        className={`
                        swiper-button-prev-custom
                        ${isModalOpen ? "bg-purple-950 text-white shadow-lg" : "xl:hover:shadow-lg xl:hover:bg-purple-950 xl:hover:text-white"}
                        lg:flex
                        justify-center items-center
                        h-[50px] w-[50px]
                        rounded-[50%]
                        absolute
                        top-1/2 -translate-y-1/2
                        z-10
                         trnaslate-all
                            duration-150
                        
                    `}
                    >
                        <IoIosArrowBack className="text-[28px]" />
                    </button>


                    <button
                        style={{ right: R, transformX: `-translateX(-${R})` }}
                        className={`
                            swiper-button-next-custom 
                            ${isModalOpen ? "bg-purple-950 text-white" : "xl:hover:shadow-lg xl:hover:bg-purple-950 xl:hover:text-white"}
                            lg:flex            
                            justify-center 
                            items-center 
                            h-[50px] w-[50px] 
                            text-purple-950
                            rounded-[50%] 
                            absolute  
                            top-1/2 -translate-y-1/2
                            z-10
                            trnaslate-all
                            duration-150
                    `}
                    >
                        <IoIosArrowForward className="text-[28px]" />
                    </button>
                </>
            )
        }
    </div>
}