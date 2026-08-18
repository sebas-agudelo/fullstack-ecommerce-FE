import { Link } from "react-router-dom"; 

import { useSession } from "../../../hooks/auth/useAuth";

import { PiShoppingCartThin } from "react-icons/pi";
import { GoPerson } from "react-icons/go";
import { IoIosHeartEmpty } from "react-icons/io";
import { useContext } from "react";
import { CartContext } from "../../../Context/useCartContext";

export const Icons = () => {
      const { data: session } = useSession();
      const {items} = useContext(CartContext);
      
    return (
        <div className="flex justify-between space-x-6 md:space-x-10 font-bold">
            <div className="flex flex-col items-center hover:text-purple-900">
                <IoIosHeartEmpty className="text-[27px] text-purple-900" />
            </div>

            {
                <Link to={session?.user ? '/konto' : '/loggain'} className="hover:text-purple-900">
                    <GoPerson className="text-[27px] text-purple-900" />
                </Link>
            }

            <Link to={'/cart'} className="relative hover:text-purple-900">
                <PiShoppingCartThin className="text-[27px] text-purple-900" />
                <p className="absolute top-[-100%] right-[-15%] translate-y-[100%] translate-x-[15%] bg-purple-950 text-white h-[20px] w-[20px] rounded-[50%] flex items-center justify-center text-xs">{items}</p>
            </Link>
        </div>
    )
}