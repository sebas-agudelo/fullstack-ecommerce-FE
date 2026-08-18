import { FaInstagram } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { AiOutlineTikTok } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { Link } from "react-router-dom";

export const SocialLinks = () => {
    const icons = [
        <FaInstagram />,
        <IoLogoFacebook />,
        <IoLogoLinkedin />,
        <AiOutlineTikTok />,
        <FaYoutube />
    ];

    return (
        <div className="flex justify-center md:justify-start text-2xl text-gray-700 gap-4 pb-6 border-b-[0.5px] border-purple-950 px-4 md:px-8">
            {
                icons.map((icon) => (
                    <Link to={''} className="lg:hover:text-purple-950">{icon}</Link>
                ))
            }
        </div>
    )
}