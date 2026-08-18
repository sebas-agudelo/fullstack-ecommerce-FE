import { Link } from "react-router-dom";

import {Logo} from "../../../components/Common/Logo";

import { IoIosArrowBack } from "react-icons/io";
 
export const CheckoutHeader = () => {
    return (
        <div className="mb-10">
            <div className="flex justify-center mb-10">
                <Logo />
            </div>

            {/* <div>
                <h1 className="font-semibold text-2xl mb-2 lg:mb-0">Kassa</h1>
                <Link to={'/'} className="flex items-center hover:text-purple-950 hover:font-semibold gap-2 hover:gap-0 transition-all duration-300 font-medium"><IoIosArrowBack className="text-lg"/> <p>Fortsätt handla</p></Link>
            </div> */}
        </div>
    )
}