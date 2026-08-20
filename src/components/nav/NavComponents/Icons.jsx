import { Link } from "react-router-dom"; 

import { useSession } from "../../../hooks/auth/useAuth";

import { IoCartOutline } from "react-icons/io5";

import { RxAvatar } from "react-icons/rx";
import { AiOutlineHeart } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "../../../Context/useCartContext";

export const Icons = () => {
      const { data: session } = useSession();
      const {items} = useContext(CartContext);
      
    return (
        <div className="flex justify-between space-x-6 md:space-x-10 font-bold">
            <div className="flex flex-col items-center hover:text-purple-900">
                <AiOutlineHeart className="text-[29px] lg:text-[31px] text-purple-900" />
            </div>

            {
                <Link to={session?.user ? '/konto' : '/loggain'} className="hover:text-purple-900">
                    <RxAvatar className="text-[29px] lg:text-[31px] text-purple-950 font-extrabold" />
                </Link>
            }

            <Link to={'/cart'} className="relative hover:text-purple-900">
                <IoCartOutline className="text-[29px] lg:text-[31px] text-purple-950" />
                <p className="absolute top-[-70%] right-[-10%] translate-y-[70%] translate-x-[10%] bg-purple-950 text-white h-[21px] w-[21px] rounded-[50%] flex items-center justify-center text-xs">{items}</p>
            </Link>
        </div>
    )
}